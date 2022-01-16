# Code

## Coloration dans une ligne

Pour colorer du code il suffit de placer `#!python` avant mon code python.
=== "Markdown"
    ````
    La fonction Python `#!python range()` permet de générer une séquence de nombres.
    ````
=== "Rendu"
    <span style="color:black"> La fonction Python `#!python range()` permet de générer une séquence de nombres.</span>

## Bloc de code

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


??? tip "Embarquement d'un fichier"

    === "Un fichier"  
        ````md
        ``` title="helloworld.cs"
        --8<--​ "helloworld.cs"
        ```
        ````
    === "Plusieurs fichiers"
        ````md
        ```md
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


!!! tip "Poupée russe"
    Il est possible d'emboiter des blocs de code en ajoutant un ` a chaque incrément.
    
## Arguments des blocs de code

| Objectif | Moyen |
|-----------|----------|
|Ajouter un titre au bloc de code| `title="nom_fichier` |
| Surligner une/des lignes| `hl_lines="1-2 5 7"`|
| Numeroter les lignes | `linenums="1"` |
