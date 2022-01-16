# Mise en page

## Titres

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


## Listes

### Liste numérotée

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

### Liste à puces

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
    <ul><span style="color: black"> <!-- Pas en markdown a cause de la couleur, mais ça marche sinon -->
        <li>Premier</li>
        <li>Second le second</li>
        <ul>
            <li>Troisième</li>
        </ul>
    </span></ul>


## Règle horizontale
    
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
    <span style="color: black">Du texte</span>
    ***
    <span style="color: black">Du texte sous la règle</span>


## Tableaux

[Table formatter util](http://markdowntable.com/)  

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

## Blocs de citation

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

## Tasklist

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
    * [x] <span style="color: black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
    * [ ] <span style="color: black">Vestibulum convallis sit amet nisi a tincidunt</span>
        * [x] <span style="color: black">In hac habitasse platea dictumst</span>
        * [x] <span style="color: black">In scelerisque nibh non dolor mollis congue sed et metus</span>
        * [ ] <span style="color: black">Praesent sed risus massa</span>
    * [ ] <span style="color: black">Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque</span>

## LaTex

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

## Touches clavier

A faire
https://facelessuser.github.io/pymdown-extensions/extensions/keys/

