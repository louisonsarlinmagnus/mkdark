# Multimédia

## Barres de chargement

=== "Barres simples"
    ```md
    [=0% "0%"]
    [=5% "5%"]
    [=25% "25%"]
    [=45% "45%"]
    [=65% "65%"]
    [=85% "85%"]
    [=100% "100%"]
    ```
=== "Barres customisées"
    ```md
    [=85% "85%"]{: .candystripe}
    [=100% "100%"]{: .candystripe .candystripe-animate}

    [=0%]{: .thin}
    [=5%]{: .thin}
    [=25%]{: .thin}
    [=45%]{: .thin}
    [=65%]{: .thin}
    [=85%]{: .thin}
    [=100%]{: .thin}
    ```
=== "Rendu"
    [=0% "0%"]
    [=5% "5%"]
    [=25% "25%"]
    [=45% "45%"]
    [=65% "65%"]
    [=85% "85%"]
    [=100% "100%"]

    [=85% "85%"]{: .candystripe}
    [=100% "100%"]{: .candystripe .candystripe-animate}

    [=0%]{: .thin}
    [=5%]{: .thin}
    [=25%]{: .thin}
    [=45%]{: .thin}
    [=65%]{: .thin}
    [=85%]{: .thin}
    [=100%]{: .thin}


## Images

=== "Image local"
    ```md
    ![L'image n'a pu être chargée](../img/test.jpg "Infobulle du survol de l'image")
    ```

=== "Image en ligne"
    ```md
    ![L'image n'a pu être chargée](img/test.jpg "Infobulle du survol de l'image")
    ```

=== "Image en référence"
    ```md
    ![L'image n'a pu être chargée][logo]

    [logo]: ../img/test.jpg "Infobulle du survol de l'image"
    ```

=== "Rendu"
    ![L'image n'a pu être chargée](../img/test.jpg "Infobulle du survol de l'image")

=== "HTML"
    ```html
    <center>
        <figure>
            <img
                src="https://www.pouet.com/images/image.png"
                alt="L'image n'a pu être chargée"
                width="600"
                height="600"
            >
            <figcaption><i>Figure x: Description de l'image</i></figcaption>
        </figure>
    </center>
    ```

??? info "Alignement"
    === "Gauche"
        ```md
        ![Image title](https://dummyimage.com/600x400/eee/aaa){ align=left }
        ```

        ![Image title](https://dummyimage.com/600x400/eee/aaa){ align=left }
    === "Droite"
        ```md
        ![Image title](https://dummyimage.com/600x400/eee/aaa){ align=right }
        ```

        ![Image title](https://dummyimage.com/600x400/eee/aaa){ align=right }    



## Videos YouTube
    
=== "Markdown"
    ```md
    [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
    ```
=== "HTML"
    ```html
    <a 
        href="https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE"
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
    [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
