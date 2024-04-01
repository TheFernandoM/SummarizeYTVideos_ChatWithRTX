/********************************************************************************/
// YOUTUBE: EXPORT ANY CHANNEL VIDEO TITLES AND URLS TO TEXT/CSV/EXCEL/SPREADSHEET
// JAVASCRIPT CODE TO COPY & PASTE IN THE CONSOLE (F12) OF ANY WEB BROWSER. 
// TESTED IN CHROME IN JUNE 2023, BUT SHOULD WORK IN ANY WEB BROWSER.
// VIDEO TUTORIAL AND SUPPORT AVAILABLE AT https://www.youtube.com/@NetgrowsTech/
// CODE CREATED BY NETGROWS TECH. VISIT US AT https://responsive-muse.com & https://netgrows.com
/********************************************************************************/



    //STEP 1

    //Visit the channel videos page:

    //Example: https://www.youtube.com/@NetgrowsTech/videos



    //STEP 2

    //Open the console (F12), paste the code 1 and press enter

    //COPY & PASTE CODE:

    let goToBottom = setInterval(() => window.scrollBy(0, 800), 1000);




    //STEP 3

    //Wait until the page scrolls to the bottom and then paste the code 2 and press enter
    //You can copy and paste this data into any spreadsheet or optionally download it as a CSV file (see step 4)

    //COPY & PASTE CODE:
    clearInterval(goToBottom);
    let arrayVideos = [];
    console.log('\n'.repeat(50));
    const links = document.querySelectorAll('a');
    for (const link of links) {
    if (link.id === "video-title-link") {
        arrayVideos.push(link.title + ';' + link.href);
        console.log(link.title + '\t' + link.href);
    }
    }



    //STEP 4 (optional)

    //Force download as a CSV file (using ; as separator)

    //COPY & PASTE CODE:

    let data = arrayVideos.join('\n');
    let blob = new Blob([data], {type: 'text/csv'});
    let elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = 'my_data.csv';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
