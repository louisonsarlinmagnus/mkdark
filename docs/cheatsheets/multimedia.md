# Multimédia

## Images

!!! example "Images"

    === "Markdown"
        ```md
        Image en ligne:
        ![alt text](https://www.pouet.com/images/image.png "Logo Title Text 1")

        Image en référence:
        Reference-style: 
        ![alt text][logo]

        [logo]: https://www.pouet.com/images/image.png "Logo Title Text 2"
        ```

    === "HTML"
        ```html
        <center>
          <figure>
            <img src="https://www.pouet.com/images/image.png"
            alt="Image introuvable"
            width="600"
            height="600"
            >
            <figcaption><i>Figure x: Description de l'image</i></figcaption>
          </figure>
        </center>
        ```

## Videos YouTube

!!! example "Vidéos YouTube"
    
    === "Markdown"
        ```md
        [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
        ```
    === "HTML"
        ```html
        <a 
            href="https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE
            "target="_blank">
                <img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
                alt="IMAGE ALT TEXT HERE"
                width="240"
                height="180"
                border="10"
                />
        </a>
        ```
    === "Rendu"
        <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ
            "target="_blank">
                <img src="http://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" 
                alt="IMAGE ALT TEXT HERE"
                width="240"
                height="180"
                border="10"
                />
        </a>


