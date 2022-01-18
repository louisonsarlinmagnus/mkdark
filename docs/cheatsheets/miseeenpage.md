# Mise en page

## Formattage

=== "Markdown"
    ```md
    Text can be {-​-deleted--} and replacement text {+​+added++}. This can also be
    combined into {~​~one~>a single~~} operation. {=​=Highlighting==} is also
    possible {>​>and comments can be added inline<<}.

    {=​=
    Formatting can also be applied to blocks by putting the opening and closing
    tags on separate lines and adding new lines between the tags and the content.
    ==}
    ```
=== "Rendu"
    <span style="color: black">
    Text can be {--deleted--} and replacement text {++added++}. This can also be
    combined into {~~one~>a single~~} operation. {==Highlighting==} is also
    possible {>>and comments can be added inline<<}.

    {==<span style="color: black">
    Formatting can also be applied to blocks by putting the opening and closing
    tags on separate lines and adding new lines between the tags and the content.
    ==}
    </span>


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

??? info "Alignement du tableau"
    === "Left"
        ```md hl_lines="2"
        | Method      | Description                          |
        | :---------- | :----------------------------------- |
        | `GET`       | :material-check:     Fetch resource  |
        | `PUT`       | :material-check-all: Update resource |
        | `DELETE`    | :material-close:     Delete resource |
        ```
    === "Center"
        ```md hl_lines="2"
        | Method      | Description                          |
        | :---------: | :----------------------------------: |
        | `GET`       | :material-check:     Fetch resource  |
        | `PUT`       | :material-check-all: Update resource |
        | `DELETE`    | :material-close:     Delete resource |
        ```

    === "Right"
        ```md hl_lines="2"
        | Method      | Description                          |
        | ----------: | -----------------------------------: |
        | `GET`       | :material-check:     Fetch resource  |
        | `PUT`       | :material-check-all: Update resource |
        | `DELETE`    | :material-close:     Delete resource |
        ```

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

=== "Equation dans une ligne"
    ```latex
    L'homomorphisme $f$ est injectif si et seulement si son noyau est le seulement
    le singleton $e_G$, car sinon $\exists a,b\in G$ avec $a\neq b$ tel que$f(a)=f(b)$.
    ```
=== "Bloc d'équation"
    ```latex
    $$
    \operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
    $$
    ```
=== "Rendu"
    <span style="color: black">
    L'homomorphisme $f$ est injectif si et seulement si son noyau est le seulement
    le singleton $e_G$, car sinon $\exists a,b\in G$ avec $a\neq b$ tel que$f(a)=f(b)$.
    $$
    \operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
    $$
    </span>


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

=== "Markdown"
    ```md
    ++ctrl+alt+delete++
    ```
=== "Rendu"
    ++ctrl+alt+delete++

??? tip "Touche Custom"
    === "Markdown"
        ```md
        ++ctrl+alt+"My Special Key"++

        ++cmd+alt+"&Uuml;"++
        ```
    === "Rendu"
        ++ctrl+alt+"My Special Key"++

        ++cmd+alt+"&Uuml;"++

??? info "Touches alphanumériques"
    Name    | Display   |
    ------- | --------- |
    `0`     | ++0++     |
    `1`     | ++1++     |
    `2`     | ++2++     |
    `3`     | ++3++     |
    `4`     | ++4++     |
    `5`     | ++5++     |
    `6`     | ++6++     |
    `7`     | ++7++     |
    `8`     | ++8++     |
    `9`     | ++9++     |
    `a`     | ++a++     |
    `b`     | ++b++     |
    `c`     | ++c++     |
    `d`     | ++d++     |
    `e`     | ++e++     |
    `f`     | ++f++     |
    `g`     | ++g++     |
    `h`     | ++h++     |
    `i`     | ++i++     |
    `j`     | ++j++     |
    `k`     | ++k++     |
    `l`     | ++l++     |
    `m`     | ++m++     |
    `n`     | ++n++     |
    `o`     | ++o++     |
    `p`     | ++p++     |
    `q`     | ++q++     |
    `r`     | ++r++     |
    `s`     | ++s++     |
    `t`     | ++t++     |
    `u`     | ++u++     |
    `v`     | ++v++     |
    `w`     | ++w++     |
    `x`     | ++x++     |
    `y`     | ++y++     |
    `z`     | ++z++     |

??? info "Touches ponctuation"
    Name            | Display           | Aliases
    --------------- | ----------------- | -------
    `backslash`     | ++backslash++     |
    `bar`           | ++bar++           | `pipe`
    `brace-left`    | ++brace-left++    | `open-brace`
    `brace-right`   | ++brace-right++   | `close-bracket`
    `bracket-left`  | ++bracket-left++  | `open-bracket`
    `bracket-right` | ++bracket-right++ | `close-bracket`
    `colon`         | ++colon++         |
    `comma`         | ++comma++         |
    `double-quote`  | ++double-quote++  | `dblquote`
    `equal`         | ++equal++         |
    `exclam`        | ++exclam++        | `exclamation`
    `grave`         | ++grave++         | `grave-accent`
    `greater`       | ++greater++       | `greater-than`, `gt`
    `less`          | ++less++          | `less-than`, `lt`
    `minus`         | ++minus++         | `hyphen`
    `period`        | ++period++        |
    `plus`          | ++plus++          |
    `question`      | ++question++      | `question-mark`
    `semicolon`     | ++semicolon++     |
    `single-quote`  | ++single-quote++  |
    `slash`         | ++slash++         |
    `tilde`         | ++tilde++         |
    `underscore`    | ++underscore++    |
    `space` | ++space++ | `spc`

??? info "Touches de navigation"
    Name          | Display         | Aliases
    ------------- | --------------- | -------
    `arrow-up`    | ++arrow-up++    | `up`
    `arrow-down`  | ++arrow-down++  | `down`
    `arrow-left`  | ++arrow-left++  | `left`
    `arrow-right` | ++arrow-right++ | `right`
    `page-up`     | ++page-up++     | `prior`, `page-up`, `pg-up`
    `page-down`   | ++page-down++   | `next`, `page-dn`, `pg-dn`
    `home`        | ++home++        |
    `end`         | ++end++         |
    `tab`         | ++tab++         | `tabulator`

??? info "Touches d'édition"
    Name        | Display       | Aliases
    ----------- | ------------- | -------
    `backspace` | ++backspace++ | `back`, `bksp`
    `delete`    | ++delete++    | `del`
    `insert`    | ++insert++    | `ins`

??? info " Touches d'actions"
    Name           | Display          | Aliases
    -------------- | -----------------| -------
    `break`        | ++break++        | `cancel`
    `caps-lock`    | ++caps-lock++    | `capital`, `cplk`
    `clear`        | ++clear++        | `clr`
    `eject`        | ++eject++        |
    `enter`        | ++enter++        | `return`
    `escape`       | ++escape++       | `esc`
    `help`         | ++help++         |
    `print-screen` | ++print-screen++ | `prtsc`
    `scroll-lock`  | ++scroll-lock++  | `scroll`

??? info "Touches du pavé numérique"
    Name            | Display           | Aliases
    --------------- | ----------------- | -------
    `num0`          | ++num0++          |
    `num1`          | ++num1++          |
    `num2`          | ++num2++          |
    `num3`          | ++num3++          |
    `num4`          | ++num4++          |
    `num5`          | ++num5++          |
    `num6`          | ++num6++          |
    `num7`          | ++num7++          |
    `num8`          | ++num8++          |
    `num9`          | ++num9++          |
    `num-asterisk`  | ++num-asterisk++  | `multiply`
    `num-clear`     | ++num-clear++     |
    `num-delete`    | ++num-delete++    | `num-del`
    `num-equal`     | ++num-equal++     |
    `num-lock`      | ++num-lock++      | `numlk`, `numlock`
    `num-minus`     | ++num-minus++     | `subtract`
    `num-plus`      | ++num-plus++      | `add`
    `num-separator` | ++num-separator++ | `decimal`, `separator`
    `num-slash`     | ++num-slash++     | `divide`
    `num-enter`     | ++num-enter++     |

??? info "Touches de modifications"
    Name            | Display           | Aliases
    --------------- | ----------------- | -------
    `alt`           | ++alt++           |
    `left-alt`      | ++left-alt++      | `lalt`
    `right-alt`     | ++right-alt++     | `ralt`
    `alt-graph`     | ++alt-graph++     | `altgr`
    `command`       | ++command++       | `cmd`
    `left-command`  | ++left-command++  | `lcommand`, `lcmd`, `left-cmd`
    `right-command` | ++right-command++ | `rcommand`, `rcmd`, `right-cmd`
    `control`       | ++control++       | `ctrl`
    `left-control`  | ++left-control++  | `lcontrol`, `lctrl`, `left-ctrl`
    `right-control` | ++right-control++ | `rcontrol`, `rctrl`, `right-ctrl`
    `function`      | ++function++      | `fn`
    `meta`          | ++meta++          |
    `left-meta`     | ++left-meta++     | `lmeta`
    `right-meta`    | ++right-meta++    | `rmeta`
    `option`        | ++option++        | `opt`
    `left-option`   | ++left-option++   | `loption`, `lopt`, `left-opt`
    `right-option`  | ++right-option++  | `roption`, `ropt`, `right-opt`
    `shift`         | ++shift++         |
    `left-shift`    | ++left-shift++    | `lshift`
    `right-shift`   | ++right-shift++   | `rshift`
    `super`         | ++super++         |
    `left-super`    | ++left-super++    | `lsuper`
    `right-super`   | ++right-super++   | `rsuper`
    `windows`       | ++windows++       | `win`
    `left-windows`  | ++left-windows++  | `lwindows`, `left-win`, `lwin`
    `right-windows` | ++right-windows++ | `rwindows`, `right-win`, `rwin`

??? info "Touches fonction"
    Name  | Display | Aliases
    ----- | ------- | -------
    `f1`  | ++f1++  |
    `f2`  | ++f2++  |
    `f3`  | ++f3++  |
    `f4`  | ++f4++  |
    `f5`  | ++f5++  |
    `f6`  | ++f6++  |
    `f7`  | ++f7++  |
    `f8`  | ++f8++  |
    `f9`  | ++f9++  |
    `f10` | ++f10++ |
    `f11` | ++f11++ |
    `f12` | ++f12++ |
    `f13` | ++f13++ |
    `f14` | ++f14++ |
    `f15` | ++f15++ |
    `f16` | ++f16++ |
    `f17` | ++f17++ |
    `f18` | ++f18++ |
    `f19` | ++f19++ |
    `f20` | ++f20++ |
    `f21` | ++f21++ |
    `f22` | ++f22++ |
    `f23` | ++f23++ |
    `f24` | ++f24++ |

??? info "Touches extra"
    Name                | Display               | Aliases
    ------------------- | --------------------- | -------
    `backtab`           | ++backtab++           | `bktab`
    `browser-back`      | ++browser-back++      |
    `browser-favorites` | ++browser-favorites++ | `favorites`
    `browser-forward`   | ++browser-forward++   | `forward`
    `browser-home`      | ++browser-home++      |
    `browser-refresh`   | ++browser-refresh++   | `refresh`
    `browser-search`    | ++browser-search++    | `search`
    `browser-stop`      | ++browser-stop++      |
    `copy`              | ++copy++              |
    `context-menu`      | ++context-menu++      | `apps`, `menu`
    `mail`              | ++mail++              | `launch-mail`
    `media`             | ++media++             | `launch-media`
    `media-next-track`  | ++media-next-track++  | `next-track`
    `media-pause`       | ++media-pause++       | `pause`
    `media-play`        | ++media-play++        | `play`
    `media-play-pause`  | ++media-play-pause++  | `play-pause`
    `media-prev-track`  | ++media-prev-track++  | `prev-track`
    `media-stop`        | ++media-stop++        | `stop`
    `print`             | ++print++             |
    `reset`             | ++reset++             |
    `select`            | ++select++            |
    `sleep`             | ++sleep++             |
    `volume-down`       | ++volume-down++       | `vol-down`
    `volume-mute`       | ++volume-mute++       | `mute`
    `volume-up`         | ++volume-up++         | `vol-up`
    `zoom`              | ++zoom++              |

??? info "Souris"
    Name            | Display           | Aliases
    --------------- | ----------------- | -------
    `left-button`   | ++left-button++   | `lbutton`
    `middle-button` | ++middle-button++ | `mbutton`
    `right-button`  | ++right-button++  | `rbutton`
    `x-button1`     | ++x-button1++     | `xbutton1`
    `x-button2`     | ++x-button2++     | `xbutton2`
