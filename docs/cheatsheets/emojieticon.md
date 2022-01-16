# Emoji et Icons

## Icons

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


## Emoji

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


