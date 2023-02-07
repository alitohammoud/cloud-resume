import json
import boto3
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('AliVisitorCount')

def lambda_handler(event, context):
    response = table.get_item(Key={
            'ID':'visitors'
    })
    visitor_count = response['Item']['counter']
    visitor_count = str(int(visitor_count) + 1)
    print(visitor_count)
    response = table.put_item(Item={
            'ID':'visitors',
            'counter': visitor_count
    })

    return {

    'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': visitor_count}