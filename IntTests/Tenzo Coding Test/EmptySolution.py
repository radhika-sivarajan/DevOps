"""
Please write you name here:  Radhika Sivarajan
"""
from datetime import datetime, timedelta
import csv
import re
import pandas as pd


def get_diff_time(time1,time2):
    """
    Calculate difference between two given time

    :param time1: Time in HH:MM format
    :param time2: Time in HH:MM format
    :type 'str':
    :returns:
    :rtype 'datetime.timedelta':
    """
    start_time  = datetime.strptime(time1, '%H:%M')
    end_time  = datetime.strptime(time2, '%H:%M')
    time_diff = end_time - start_time
    return time_diff

def get_break_time(break_notes):
    """
    Calculate duration of break taken by employee.

    :param break_notes: string data separated by '-'
    :type 'str'':
    :returns: returns the duration of break-time string in HH:MM:SS format
    :rtype 'datetime.timedelta':
    """

    # Get from-time and to-time from the break notes as list
    # (Remove spaces and take only digits)
    duration_list = break_notes.split('-')
    duration_list = [x.strip(' ') for x in duration_list]
    from_time = duration_list[0]
    to_time = duration_list[1]

    from_time = re.findall('\d+',from_time)
    to_time = re.findall('\d+',to_time)

    from_hour = from_time[0]
    from_minute = ''
    to_hour = to_time[0]
    to_minute = ''

    if int(from_hour) > int(to_hour):
        to_hour = str(int(to_hour)+12)

    if len(from_time) > 1:
        from_minute = from_time[1]
    if len(to_time) > 1:
        to_minute = to_time[1]

    # Converting to HH:MM:SS format and calculating duration of break time
    total_break_time = get_diff_time(str(from_hour).zfill(2)+":"+str(from_minute).zfill(2),str(to_hour).zfill(2)+":"+str(to_minute).zfill(2))
    return total_break_time

def process_shifts(path_to_csv):
    """

    :param path_to_csv: The path to the work_shift.csv
    :type string:
    :return: A dictionary with time as key (string) with format %H:%M
        (e.g. "18:00") and cost as value (Number)
    For example, it should be something like :
    {
        "17:00": 50,
        "22:00: 40,
    }
    In other words, for the hour beginning at 17:00, labour cost was
    50 pounds
    :rtype dict:
    """
    shifts_dictionary = {}
    with open(path_to_csv, mode='r') as csv_file:

        reader = csv.DictReader(csv_file)
        for row in reader:

            staff_break_time = get_break_time(row['break_notes'])
            total_shift_time = get_diff_time(row['start_time'],row['end_time'])

            # Remove seconds (last 3 charactors) and get difference
            time_worked = get_diff_time(str(staff_break_time)[:-3], str(total_shift_time)[:-3])

            # Get number of hours to calculate labor cost.
            time_worked_list = str(time_worked).split(':')
            time_worked_delta = timedelta(hours = int(time_worked_list[0]),
            minutes = int(time_worked_list[1]), seconds = int(time_worked_list[2]))
            hours_worked = time_worked_delta.total_seconds()/3600
            labour_cost = hours_worked * float(row['pay_rate'])
            shifts_dictionary[row['start_time']] = round(labour_cost,2)
            # print(row['start_time'],round(labour_cost,2))

    return shifts_dictionary

def process_sales(path_to_csv):
    """

    :param path_to_csv: The path to the transactions.csv
    :type string:
    :return: A dictionary with time (string) with format %H:%M as key and
    sales as value (string),
    and corresponding value with format %H:%M (e.g. "18:00"),
    and type float)
    For example, it should be something like :
    {
        "17:00": 250,
        "22:00": 0,
    },
    This means, for the hour beginning at 17:00, the sales were 250 dollars
    and for the hour beginning at 22:00, the sales were 0.

    :rtype dict:
    """
    transaction_dictionary = {}
    with open(path_to_csv, mode='r') as csv_file:
        reader = csv.DictReader(csv_file)
        df = pd.DataFrame(reader)

        # Change datatype to float
        df['amount'] = df['amount'].astype(float)

        # Group by the time (first 2 charactors of time ('10:30'))
        # and sum of amount in that group time duration
        grouped_by_time = df.groupby([df.time.str[:2]])['amount'].agg('sum')
        for time_hour, sales in grouped_by_time.items():
            transaction_dictionary[time_hour+':00'] = round(sales,2)

    return transaction_dictionary

def compute_percentage(shifts, sales):
    """

    :param shifts:
    :type shifts: dict
    :param sales:
    :type sales: dict
    :return: A dictionary with time as key (string) with format %H:%M and
    percentage of sales per labour cost as value (float),
    If the sales are null, then return -cost instead of percentage
    For example, it should be something like :
    {
        "17:00": 20,
        "22:00": -40,
    }
    :rtype: dict
    """
    percentage_dictionary = {}
    print("Hour | ","Labor | ","Sales | ","Pencent")
    print("-----------------------------")
    for hour in shifts:
        if hour in sales:
            percent = (shifts[hour]/sales[hour])*100
            percentage_dictionary[hour] = round(percent,2)
            print(hour,"|",shifts[hour],"|", sales[hour],"|", round(percent,2),"%")
        else:
            percentage_dictionary[hour] = -(shifts[hour])
            print(hour,"|", shifts[hour],"|",0,"|",-(shifts[hour]))

    return percentage_dictionary

def best_and_worst_hour(percentages):
    """

    Args:
    percentages: output of compute_percentage
    Return: list of strings, the first element should be the best hour,
    the second (and last) element should be the worst hour. Hour are
    represented by string with format %H:%M
    e.g. ["18:00", "20:00"]

    """
    best_worst_list = []
    worst = min(percentages, key=percentages.get)
    dict_positive = dict((hour, percent) for hour, percent in percentages.items() if percent >= 0)
    best = min(dict_positive, key=dict_positive.get)
    best_worst_list.append(best)
    best_worst_list.append(worst)

    return best_worst_list

def main(path_to_shifts, path_to_sales):
    """
    Do not touch this function, but you can look at it, to have an idea of
    how your data should interact with each other
    """

    shifts_processed = process_shifts(path_to_shifts)
    sales_processed = process_sales(path_to_sales)
    percentages = compute_percentage(shifts_processed, sales_processed)
    best_hour, worst_hour = best_and_worst_hour(percentages)
    return best_hour, worst_hour

if __name__ == '__main__':
    # You can change this to test your code, it will not be used
    path_to_sales = "transactions.csv"
    path_to_shifts = "work_shifts.csv"
    best_hour, worst_hour = main(path_to_shifts, path_to_sales)
    print("\nBest hour : {}, Worst hour : {}\n".format(best_hour, worst_hour))


# Please write you name here: Radhika Sivarajan
