/*
            Use JavaScript to request data from the https://www.reddit.com/r/aww/.json API.
            Display the results on the page.
            At a minimum, include a title, an image and a working link for each post. (Easiest is to use the thumbnail for the image, but there are other images in the JSON response.)
            Make it look good with some CSS.
*/

(function () {
    fetch('https://www.reddit.com/r/aww/.json')
        .then(response => response.json())
        .then(data => {

            console.log(data.data.children[0])
            //for (let post of data.data.children) {

                //console.log(post.data.title);
                //console.log(post.data.thumbnail);
                //break;
            //}
        })    
}())