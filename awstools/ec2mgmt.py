import boto3
ec2 = boto3.resource('ec2')

# create a new EC2 instance
instances = ec2.create_instances(
    ImageId='ami-0aed869d62c92bc4f',
    MinCount=1,
    MaxCount=1,
    InstanceType='t2.micro',
    SecurityGroupIds=[
        'sg-0e9544434768dcde0',
    ],
    KeyName='radhika-tdd-python-key')