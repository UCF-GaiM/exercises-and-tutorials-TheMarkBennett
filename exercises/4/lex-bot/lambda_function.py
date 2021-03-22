import json
import random
import datetime


def lambda_handler(event, context):
    # TODO implement
    
    result = {
            'dialogAction': {
                "type":"Close",
                "fulfillmentState":"Fulfilled",
                "message":{
                    "contentType":"PlainText",
                      }
                }
            }
            
    ##print(event["currentIntent"]["name"])

    
    if event["currentIntent"]["name"] == "GetRandomNumber" :
        result["dialogAction"]["message"]["content"] = str(random.randint(int(event["currentIntent"]["slots"]["lowerNumber"]),int(event["currentIntent"]["slots"]["higherNumber"])))

    elif event["currentIntent"]["name"] == "TipCalculator" :
        ##Tip Calculator
        
        tip = float(event["currentIntent"]["slots"]["TipPercentage"]) / 100
        totalBill = float(event["currentIntent"]["slots"]["TotalBill"])
        result["dialogAction"]["message"]["content"] = tip * totalBill
        
    elif event["currentIntent"]["name"] == "Date" :
        ## find out what doy of the week a date lands on
        
        week_days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        
        DateMonth = int(event["currentIntent"]["slots"]["DateMonth"])
        DateDay = int(event["currentIntent"]["slots"]["DateDay"])
        DateYear = int(event["currentIntent"]["slots"]["DateYear"])
        
        dayOftheWeek = datetime.date(DateYear,DateMonth,DateDay).weekday()
        ##dayOftheWeek = (datetime.date(YY,MM,DD).strftime('%A')
        result["dialogAction"]["message"]["content"] = str(week_days[dayOftheWeek])
        
    elif event["currentIntent"]["name"] == "SplitCheck" :
        ##Split the check among friends
        
        Check = float(event["currentIntent"]["slots"]["CheckCost"])
        Split = float(event["currentIntent"]["slots"]["NumberofPeople"])
        
        splitCost = float(Check/Split)
       
        result["dialogAction"]["message"]["content"] = str(round(splitCost, 2)) + " per person"
 
    return result;
    