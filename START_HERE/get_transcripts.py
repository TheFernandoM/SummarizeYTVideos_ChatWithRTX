"""
[Creator]: Fernando Molina
[Created On]: April 1, 2024

[Contributors]: <your name goes here>

[Purpose]: Download text transcripts of YT videos, from a JSON file of links.
"""

import json
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.formatters import JSONFormatter
from youtube_transcript_api import TranscriptsDisabled


# read json file as List in python
links = []
with open('links.json', 'r') as read_obj:
    links = json.loads(read_obj.read())
    print(f'Detected {len(links)} video links')

# 
count = 1
links_count = len(links)
formatter = JSONFormatter()
for link in links:
    with open(f'Transcripts/Transcript_{count}.txt', 'w') as file:
        print(f"Getting transcript for video #{count}...")
        try:
            transcript = YouTubeTranscriptApi.get_transcript(link.split('=')[1])
        except TranscriptsDisabled:
            print(f"SUBS DISABLED on video #{count}...SKIP")
            count += 1
            continue
        except:
            print('Unknown error')
            count += 1
            continue
        json_formatted = formatter.format_transcript(transcript)
        file.write(json_formatted)
        print(f"Saved transcript for video #{count}/{links_count} [{links_count - count} remaining]")
        count += 1