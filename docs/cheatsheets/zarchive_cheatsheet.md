---
hide:
  - navigation
  # - toc
---

# Markdown Cheat Sheet

## Test

## A voir
!!! info "A regarder"
    https://squidfunk.github.io/mkdocs-material/reference/  
    https://facelessuser.github.io/pymdown-extensions/extensions/critic/  


## Résumé

| Effet                | Md              | HTML                             |
|--:-------------------|--:--------------|--:-------------------------------|
| Titre                | `#` (jusqu'a 6) | `<h1>` (jusqu'a `<h6>`)          |
| **Gras**             | `**text**`      | `<b>text<b>`                     |
| <ins>Souligner</ins> | ....            | `<ins>text</ins>`                |
| *Italique*           | `*text*`        | `<i>text</i>`                    |
| ***Gras italique***  | `***text***`    | `<b><i>text</i></b>`             |
| `code`               | \`text\`        | `<code>code</code>`              |
| [Link]               | `[Link]`        | `<a href=www.truc.com>Link</a>`  |
|  Quote               | `> text`        | `<<blockquote>text</blockquote>` |
|  ~~Rayer~~           | `~~text~~`      | `<s>text</s>`                    |
|  $Formule$           | `$text$`        | ....                             |

## Mise en page

### Titres

!!! example "Titres"

    === "Markdown"
        ```md
        # Grand titre
        ## Moyen Titre
        ### Petit Titre
        #### Petit Sous Titre
        ##### Très Petit Titre
        ###### Très Petit Sous Titre
        ```

    === "HTML"
        ````html
        <h1>Grand titre</h1>
            <h2>Moyen Titre</h2>
                <h3>Petit Titre</h3>
                    <h4>Petit Sous Titre</h4>
                        <h5>Très Petit Titre</h5>
                            <h6>Très Petit Sous Titre</h6>
        ````

    === "Rendu"
        <h1 class="headers_exemples">Grand titre</h1>
            <h2 class="headers_exemples">Moyen Titre</h2>
                <h3 class="headers_exemples">Petit Titre</h3>
                    <h4 class="headers_exemples">Petit Sous Titre</h4>
                        <h5 class="headers_exemples">Très Petit Titre</h5>
                            <h6 class="headers_exemples">Très Petit Sous Titre</h6>


### Listes

#### Liste numérotée

!!! example "Liste numérotée"

    === "Markdown"
        ```md
        1. Premièrement
        2. Puis le second
        1. Ensuite (les nombres n'importent pas)
        4. Enfin un dernier item
        </a> #On arrête la liste
        ```

    === "HTML"
        ````html
        <ol>
          <li>Premièrement</li>
          <li>Puis le second</li>
          <li>Ensuite</li>
          <li>Enfin un dernier item</li>
        </ol>
        ````

    === "Rendu"
        1. Premièrement
        2. Puis le second:
        1. Ensuite (les nombres n'importent pas)
        4. Enfin un dernier item


#### Liste à puces

!!! example "Liste à puces"

    === "Markdown"
        ```md
        - Premier
        - Second
            + Troisième
        ```

    === "HTML"
        ```html
        <ul>
            <li>Premier</li>
            <li>Second le second</li>
            <ul>
                <li>Troisième</li>
            </ul>
        </ul>
        ```

    === "Rendu"
        - Premier
        - Second
            + Troisième



### Règle horizontale

!!! example "Règle horizontale"
    
    === "Markdown"
        ```md
        ***
        ---
        ___
        ```
    === "HTML"
        ```html
        <hr/>
        ```
    === "Rendu"
        Du texte
        ***
        Du texte sous la règle

### Tableaux

[Table formatter util](http://markdowntable.com/)  

!!! example "Example"

    === "Markdown"
        ```md
        | Firstname | Lastname | Age |
        |-----------|----------|-----|
        | Jill      | Smith    | 50  |
        | Eve       | Jackson  | 94  |
        ```

    === "HTML"
        ```html
         <table style="width:100%">
          <tr> 
            <th>Firstname</th>   <!--th pour les headers-->
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>                   <!--tr pour les lignes-->
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>          <!--td pour les colonnes-->
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table> 
        ```

    === "Rendu"
        | Firstname | Lastname | Age |
        |-----------|----------|-----|
        | Jill      | Smith    | 50  |
        | Eve       | Jackson  | 94  |

### Blocs de citation

!!! example "Bloc de citation"

    === "Markdown"
        ```md
        > Un problème sans solution est un problème mal posé.  
        > Albert Einstein
        ```
    === "HTML"
        ```html
        <blockquote>
        Un problème sans solution est un problème mal posé.<br>
        Albert Einstein
        </blockquote>
        ```
    === "Rendu"
        > Un problème sans solution est un problème mal posé.  
        > Albert Einstein

### Tasklist

!!! example "Tasklist"

    === "Code"
        ```md
        * [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
        * [ ] Vestibulum convallis sit amet nisi a tincidunt
            * [x] In hac habitasse platea dictumst
            * [x] In scelerisque nibh non dolor mollis congue sed et metus
            * [ ] Praesent sed risus massa
        * [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque
        ```
    === "Rendu" 
        * [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
        * [ ] Vestibulum convallis sit amet nisi a tincidunt
            * [x] In hac habitasse platea dictumst
            * [x] In scelerisque nibh non dolor mollis congue sed et metus
            * [ ] Praesent sed risus massa
        * [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque

### LaTex

!!! tip "LaTex"
    Pour utiliser le LaTex il suffit d'entourer la formule par le symbole '$'.

| Opération        | LaTex         | Rendu           |
|------------------|---------------|-----------------|
| Signe $\times$   | \times        | $\times$        |
| Puissance        | a^{b}         | $a^{b}$         |
| Indice           | a_{b}         | $a_{b}$         |
| Racine           | \sqrt[n]{x}   | $\sqrt[n]{x}$   |
| Fraction         | \frac{a}{c}   | $\frac{a}{c}$   |
| Somme            | \sum_{i=0}^n  | $\sum_{i=0}^n$  |
| Produit          | \prod_{i=0}^n | $\prod_{i=0}^n$ |
| Fraction         | \frac{a}{c}   | $\frac{a}{c}$   |
| Intégrale        | \int_a^b      | $\int_a^b$      |
| Caractères grecs | \alpha        | $\alpha$        |
| Fonction trigo   | \sin          | $\sin$          |
| Exponentielle    | \exp(x)       | $\exp(x)$       |
| Infini           | \infty        | $\infty$        |
| Vecteur          | \vec{a}       | $\vec{a}$       |

### Touches clavier

https://facelessuser.github.io/pymdown-extensions/extensions/keys/

## Références

### Abbréviations

!!! example "Ajouter une infobulle"
    Il est possible d'ajouter une définition ou un commentaire sur mot ou une abbréviation

    === "Markdown"
        ```md
        Le HTML est maintenu par W3C.

        *[HTML]: Hyper Text Markup Language
        *[W3C]: World Wide Web Consortium
        ```
    === "Rendu"
        Le HTML est maintenu par W3C.

        *[HTML]: Hyper Text Markup Language
        *[W3C]: World Wide Web Consortium

!!! warning "Les définitions se répercutent sur toutes les occurances du mot"

!!! hint "Création d'un glossaire"
    En utilisant les snippets pour inclure un fichier, et en définissant dans un fichier externe plusieurs mot on peut créer un glossaire.
    === ":octicons-file-code-16: docs/fichier.md"
        ```md
        Le HTML est maintenu par W3C.

        --8<--​ "includes/abbreviations.md"
        ```
    === ":octicons-file-code-16: ressources/abbreviations.md"
        ```md
        *[HTML]: Hyper Text Markup Language
        *[W3C]: World Wide Web Consortium

        ```



### Liens

#### Liens externes

!!! example "Liens externes"

    === "Markdown"
        ```md
        [Lien en ligne](https://www.pouet.com)
        [Lien en référence][dU tExT eN liEn] #Non case-sensitive
        [Référence grâce a un nombre][1]
        On référence le lien direct [lien direct].
        [du text en lien]: https://www.pouet.com
        [1]: https://www.pouet.com
        [lien direct]: https://www.pouet.com
        ```

    === "HTML"
        ```html
        <a href="https://www.pouet.com">Lien en ligne</a>
        <a href="https://www.pushaune.com" target="_blank">Pour ouvrir dans un nouveau onglet</a>
        ```


#### Liens internes

!!! example "Liens externes"

    === "Markdown"
        ```md
        [Référence a un fichier](../blob/master/LICENSE)
        [Réference a un paragraphe](#liens)
        ```

    === "HTML"
        ```html
        <a href="../blob/master/LICENSE">Référence a un fichier</a>
        <a href="#liens">Réference a un paragraphe</a>
        ```


## Multimédia

### Images

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

### Videos YouTube

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


## Code

### Code dans une ligne

!!! example "Coloration de code en ligne"
    Pour colorer du code il suffit de placer `#!python` avant mon code python.
    === "Markdown"
        ````
        La fonction Python `#!python range()` permet de générer une séquence de nombres.
        ````
    === "Rendu"
        La fonction Python `#!python range()` permet de générer une séquence de nombres.

### Bloc de code

!!! tip "Embarquement d'un fichier"

    === "Markdown"  
        ````md
        ``` title="helloworld.cs"
        --8<--​ "helloworld.cs"
        ```
        ````
        ou pur plusieurs fichiers
        ````md
        ```md title="file_name_1.md et file_name_2.md"
        --8<​ --
        file_name_1.md

        file_name_2.md
        --8<​ --
        ```
        ````
    === "Rendu"
        ```
        Ici je trouve le contenu du fichier helloworld.cs
        ```

!!! example "Example"

    === "Markdown"
        ````md
        ```java hl_lines="1-2 5 7" linenums="1" title="helloword.c"
        public class HelloWorld {
          // Définition de la fonction main
          public static void main(String[] arg){
            // Affichage du commentaire Hello world dans la fenêtre de commande
            System.out.println("Hello world");
          }
        } 
        ```
        ````

    === "HTML"
        ```html
        <pre><code>
            public class HelloWorld {
                      // Définition de la fonction main
                      public static void main(String[] arg){
                        // Affichage du commentaire Hello world dans la fenêtre de commande
                        System.out.println("Hello world");
                      }
                    } 
        </code></pre>
        ```

    === "Rendu"
        ```java hl_lines="1-2 5 7" linenums="1" title="helloword.c"
        public class HelloWorld {
          // Définition de la fonction main
          public static void main(String[] arg){
            // Affichage du commentaire Hello world dans la fenêtre de commande
            System.out.println("Hello world");
          }
        } 
        ```

!!! tip "Poupée russe"
    Il est possible d'emboiter des blocs de code en ajoutant un ` a chaque incrément.
    
### Arguments

| Objectif | Moyen |
|-----------|----------|
|Ajouter un titre au bloc de code| `title="nom_fichier` |
| Surligner une/des lignes| `hl_lines="1-2 5 7"`|
| Numeroter les lignes | `linenums="1"` |



## Emoji et Icons

### Icons

Il est possible d'utiliser les icons de [Github](https://primer.style/octicons/), [fontawsome](https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free) et [Material](https://materialdesignicons.com/).  
On peut utiliser le module de recherche de [Mkdocs](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/#search).

!!! tip "Pour les utiliser il suffit d'entourer de `:` le code de l'icon"

!!! info "Personnalisation des icons"
    === ":octicons-file-code-16: mkdocs.yaml"
        ```md
        extra_css:
          - stylesheets/extra.css
        ```

    === ":octicons-file-code-16: docs/stylesheets/extra.css"
        ```md
        .heart {
        color: #FF0000;
        }

        @keyframes heart {
        0%, 40%, 80%, 100% {
            transform: scale(1);
        }
        20%, 60% {
            transform: scale(1.15);
        }
        }
        .heart {
        animation: heart 1000ms infinite;
        }
        ```

    === "Utilisation"
        ```
        :octicons-heart-fill-24:
        :octicons-heart-fill-24:{ .heart }
        ```

    === "Rendu"
        :octicons-heart-fill-24:
        :octicons-heart-fill-24:{ .heart }


### Emoji

| Smiley       | Rendu      |
|--:-----------|--:---------|
| `:alien:`    | :alien:    |
| `:yum:`      | :yum:      |
| `:confused:` | :confused: |
| `:smirk:`    | :smirk:    |
| `:kiss:`     | :kiss:     |
| `:frog:`     | :frog:     |
| `:fr:`       | :fr:       |
| `:gb:`       | :gb:       |
| `:tongue:`   | :tongue:   |
| `:computer:` | :computer: |

[Liste des smileys](https://gist.github.com/rxaviers/7360908)



## Blocs


### SuperTabs

=== "Code"
    ```
    !!! example "SuperFences"
                === "Bash"
                    ```bash
                    #!/bin/bash
                    echo "Hello world!"
                    ```
                === "C"
                    ```c
                    #include <stdio.h>
                    int main(void) {
                      printf("Hello world!\n");
                    }
                    ```
                === "C++"
                    ```cpp
                    #include <iostream>
                    int main() {
                      std::cout << "Hello world!" << std::endl;
                      return 0;
                    }
                    ```
                === "C#"
                    ```cs
                    using System;
                    class Program {
                      static void Main(string[] args) {
                        Console.WriteLine("Hello world!");
                      }
                    }
                    ```
    ```

=== "Rendu"
    === "Bash"
        ```bash
        #!/bin/bash
        echo "Hello world!"
        ```
    === "C"
        ```c
        #include <stdio.h>
        int main(void) {
          printf("Hello world!\n");
        }
        ```
    === "C++"
        ```cpp
        #include <iostream>
        int main() {
          std::cout << "Hello world!" << std::endl;
          return 0;
        }
        ```
    === "C#"
        ```cs
        using System;
        class Program {
          static void Main(string[] args) {
            Console.WriteLine("Hello world!");
          }
        }
        ```



### SuperFences

!!! info
    Une SuperFence est un SuperTabs dans un bloc d'alerte

!!! example "SuperFences"

    === "Code"
        ```
        !!! example "SuperFences"
                    === "Bash"
                        ```bash
                        #!/bin/bash
                        echo "Hello world!"
                        ```
                    === "C"
                        ```c
                        #include <stdio.h>
                        int main(void) {
                          printf("Hello world!\n");
                        }
                        ```
                    === "C++"
                        ```cpp
                        #include <iostream>
                        int main() {
                          std::cout << "Hello world!" << std::endl;
                          return 0;
                        }
                        ```
                    === "C#"
                        ```cs
                        using System;
                        class Program {
                          static void Main(string[] args) {
                            Console.WriteLine("Hello world!");
                          }
                        }
                        ```
        ```

    === "Rendu"
        !!! example "SuperFences"
            === "Bash"
                ```bash
                #!/bin/bash
                echo "Hello world!"
                ```
            === "C"
                ```c
                #include <stdio.h>
                int main(void) {
                  printf("Hello world!\n");
                }
                ```
            === "C++"
                ```cpp
                #include <iostream>
                int main() {
                  std::cout << "Hello world!" << std::endl;
                  return 0;
                }
                ```
            === "C#"
                ```cs
                using System;
                class Program {
                  static void Main(string[] args) {
                    Console.WriteLine("Hello world!");
                  }
                }
                ```

### Bloc Spoiler

```
??? warning "Spoiler"
    Ceci était un spoiler a dérouler
```

??? warning "Spoiler"
    Ceci est un spoiler a dérouler

### Bloc d'alerte

```
!!! keyword "titre du bloc facultatif (keyword ou keyword)"
    blabla
```

!!! note "note ou seealso"
    blabla

!!! tip "tip ou hint ou important"
    blabla

!!! info "info ou todo"
    blabla

!!! help "question ou help ou faq"
    blabla

!!! summary "summary"
    blabla

!!! warning "warning ou caution ou attention"
    blabla

!!! failure "failure ou fail ou missing"
    blabla

!!! done "check ou done"
    blabla

!!! danger "danger ou error"
    blabla

!!! bug "bug"
    blabla

!!! quote "quote"
    blabla

!!! example "example"
    blabla
