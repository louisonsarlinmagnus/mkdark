# Références

## Boutons

=== "Bouton simple"
    === "Markdown"
        ```md
        [Appuyez sur ce bouton](#){ .md-button }
        ```
    === "Rendu"
        [Appuyez sur ce bouton](#){ .md-button }

=== "Bouton plein"
    === "Markdown"
        ```md
        [Appuyez sur ce bouton](#){ .md-button .md-button--primary }
        ```
    === "Rendu"
        [Appuyez sur ce bouton](#){ .md-button .md-button--primary }

=== "Bouton avec icon :fontawesome-solid-icons:"
    === "Markdown"
        ```md
        [Envoyer :fontawesome-solid-paper-plane:](#){ .md-button }
        ```
    === "Rendu"
        [Envoyer :fontawesome-solid-paper-plane:](#){ .md-button }  


## Abbréviations

Il est possible d'ajouter une définition ou un commentaire sur mot ou une abbréviation par le biais d'une "infobulle"

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

??? hint "Création d'un glossaire"
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

## Liens

### Liens externes

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


### Liens internes

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

## Notes de pied de page

=== "Sur une ligne"
    ```md
    Une phrase qui mérite une note de pied de page.[^1]

    [^1]: Lorem ipsum dolor sit amet.
    ```

=== "Sur plusieurs lignes"
    ```md
    Une autre phrase qui mérite une grosse note de pied de page.[^1]

    [^2]:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.
    ```
=== "Rendu"
    <span style="color:black">Une autre phrase qui mérite une grosse note de pied de page.[^1]  
    Une phrase qui mérite une note de pied de page.[^2]  
    <br>
    [:material-arrow-down: Voir les notes en bas de page](#fn:1)
    </span>
    [^1]: Lorem ipsum dolor sit amet.
    [^2]:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.
