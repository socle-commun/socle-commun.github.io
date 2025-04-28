# 📊 Diagrammes

Vous pouvez ajouter vos propres règles pour détecter des rôles ou des tags personnalisés.

## Diagramme de classes

```mermaid
---
title: Sloth Project Tree
---
classDiagram
    class IProject {
        +Tree root
        +FileNode readme
        +string name
        +string version
        +ProjectType type
        +RuntimeEnvironment[] runtimes
        +ILayer apps
        +ILayer apis
        +ILayer libs
        +ILayer ext
        +Layer dependencies
        +ExportMap exports
        +ScriptMap scripts
        +GitMetadata git
        +IDocumentationTree documentation
        +Tree tests
        +ConfigurationTree config
        +FileNode[] unknownFiles
    }
    class Tree
    class FileNode
    class ProjectType
    class RuntimeEnvironment
    class ILayer {
        +Tree tree
        +string rootPath
    }
    class Layer
    class ExportMap
    class ScriptMap
    class GitMetadata {
        +string remoteUrl
        +string currentBranch
        +string userName
        +string userEmail
        +boolean isDirty
        +string[] changedFiles
        +string[] stagedFiles
        +string diffSummary
        +string diffRaw
    }
    class IDocumentationTree {
        +Tree tree
        +string rootPath
        +FileNode readme
    }
    class ConfigurationTree {
        +Tree tree
        +string rootPath
    }
    IProject --> Tree : root
    IProject --> FileNode : readme
    IProject --> ProjectType : type
    IProject --> RuntimeEnvironment : runtimes
    IProject --> ILayer : apps
    IProject --> ILayer : apis
    IProject --> ILayer : libs
    IProject --> ILayer : ext
    IProject --> Layer : dependencies
    IProject --> ExportMap : exports
    IProject --> ScriptMap : scripts
    IProject --> GitMetadata : git
    IProject --> IDocumentationTree : documentation
    IProject --> Tree : tests
    IProject --> ConfigurationTree : config
    IProject --> FileNode : unknownFiles

    ILayer --> Tree : tree
    ILayer --> string : rootPath
    IDocumentationTree --> Tree : tree
    IDocumentationTree --> string : rootPath
    IDocumentationTree --> FileNode : readme
    ConfigurationTree --> Tree : tree
    ConfigurationTree --> string : rootPath
```

## Définition des classes principales et des classes associées

```mermaid

```
