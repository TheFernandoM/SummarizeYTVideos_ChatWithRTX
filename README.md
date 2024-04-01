# Summarize _YT Videos_ using _Chat With RTX_
![imgs/banner.png](imgs/banner.png)

Leverage Chat with RTX to summarize videos in your backlog. 

(1) Get text transcripts for videos then (2) feed the transcripts to Chat With RTX (3) save hours of time instead of having to watch full videos.

## Requirements:
* Hardware & Operating System that can run Chat With RTX
  * (or remote access to a machine that does) 
* Python (3+)
    * Python module: _YouTube Transcript/Subtitle API (including automatically generated subtitles and subtitle translations)_
  * https://pypi.org/project/youtube-transcript-api/
* Web browser with access to a Console or Developer Tools (press F12)

## How-to:

1. Get video URLs from a playlist
    * Use the code in [ExportVideoTitleAndUrls.js](START_HERE/ExportVideoTitleAndUrls.js)
    * Save the output to a .csv file

2. Convert raw `.csv` to structured `.json.`
    * Use [convert_csv_to_dict.py](START_HERE/convert_csv_to_dict.py)
3. [Optional] Filter any unwanted files
    * \<TODO\>
4. Download transcripts
    * Use [get_transcripts.py](START_HERE/get_transcripts.py)
6. Open `Transcripts` folder in Chat With RTX
7. Enjoy! 🎉

## TODO
* Investigate if it's possible to fetch more relevant information about the videos, in Step #1
 * For example any tags, or video descriptions. Any relevant info that is not just pure metadata

# License
[Link to the License: "/LICENSE.md"](LICENSE.md)

_Summarize YT Videos using Chat With RTX © 2024 by Fernando Molina is licensed under Attribution-NonCommercial-ShareAlike 4.0 International_

# Disclaimers
* You, the reader, have permission to Fork & Distribute this software as long as you give Attribution (credit) to the authors, and ShareAlike (use the same or similar license)
(last updated the license text above on April 1 2024)
* Chat with RTX is property of NVIDIA [https://www.nvidia.com/en-us/](https://www.nvidia.com/en-us/)
* YouTube is property of Google LLC

# Disclaimer
This software has no Warranty and the maintainers of it are not responsible for any damages or losses caused by using the software.
