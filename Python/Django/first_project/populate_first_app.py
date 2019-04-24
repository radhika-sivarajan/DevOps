import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','first_project.settings')

import django
django.setup()


import random
from faker import Faker
from first_app.models import AccessRecord, Topic, WebPage

fakegen = Faker()
topics = ['Social', 'Games', 'Search', 'Marketpalce', 'News']

def add_topic():
    t = Topic.objects.get_or_create(top_name=random.choice(topics))[0]
    t.save()
    return t

def poulate(N=5):
    for entry in range(N):

        # Get the topic for the entry
        top = add_topic()

        # Create fake data for the entry
        fake_url = fakegen.url()
        fake_date = fakegen.date()
        fake_name = fakegen.company()

        # Create new WebPage entry
        webpg = WebPage.objects.get_or_create(topic=top, name=fake_name, url=fake_url)[0]

        # Create AccessRecord for that WebPage
        acc_rec = AccessRecord.objects.get_or_create(name= webpg, date=fake_date)[0]

if __name__ == '__main__':
    print("Populating script")
    poulate(10)
    print("Populated")
