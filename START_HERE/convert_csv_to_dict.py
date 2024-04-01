"""
[Creator]: Fernando Molina
[Created On]: April 1, 2024

[Contributors]: <your name goes here>

[Purpose]: Convert a .csv file that has a list of YT links, to .json format.
"""

from csv import reader
import json

links = [ ]
with open('playlist.csv', 'r') as read_obj:
    csv_reader = reader(read_obj)
    for row in csv_reader:
        match len(row):
            case 1:
                title = row[0].split(';')[0]
                link = row[0].split(';')[1]
            case 2:
                author = row[0]
                title = row[1].split(';')[0]
                link = row[1].split(';')[1]

        print(title + ';' + link)
        links.append(link)

with open('links.json', 'w') as file:
     file.write(json.dumps(links))
     print("Work complete!")