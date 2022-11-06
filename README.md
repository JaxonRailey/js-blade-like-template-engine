# JS blade-like template engine

For a long time I have been looking for a simple blade-like template engine for js, as I didn't find it I thought I'd develop it and share it.

It only supports basic statements (if, switch, for, while), in the code below there is the complete example of its use.

``` blade

<div id="app"></div>

<template id="template-app">

    <!-- print simple value -->
    <h1>Created By {{ user }}</h1>

    <!-- if...else statement -->
    @if (hour < 12)
        <p>Good Morning</p>
    @elseif (hour < 18)
        <p>Good Afternoon</p>
    @else
        <p>Good Evening</p>
    @endif

    <hr>

    <!-- switch statement -->
    @switch (day)
        @case (1)
            <p>today is Monday :(</p>
            @break
        @case (2)
            <p>today is Tuesday :(</p>
            @break
        @case (3)
            <p>today is Wednesday :(</p>
            @break
        @case (4)
            <p>today is Thursday :|</p>
            @break
        @case (5)
            <p>today is Friday :)</p>
            @break
        @default
            <p>Finally it's weekend XD</p>
    @endswitch

    <hr>

    <!-- for...of statement -->
    @for (skill of skills)
        <p>{{ skill }}</p>
    @endfor

    <hr>

    <!-- for...in statement -->
    @for (index in fruits)
        <p>{{ fruits[index].name + ' - ' + fruits[index].type }}</p>
    @endfor

    <hr>

    <!-- while statement -->
    @while (count <= 10)
        <p>{{ count++ }}</p>
    @endwhile

</template>  
```

While in the javascript code you just need to select the html element in which to inject the rendered template and apply the **renderTemplate** function that receives as a parameter the selector of the template that hosts the code to be rendered.

All the variables present up to that statement can be used within the template

``` js

let skills = ['php', 'sql', 'js', 'html', 'css', 'dart'];
let user   = 'JaxonRailey';
let count  = 4;
let day    = new Date().getDay();
let hour   = new Date().getHours();
let fruits = [
    {
        name: 'lemon',
        type: 'citrus'
    },
    {
        name: 'grapefruit',
        type: 'citrus'
    },
    {
        name: 'peach',
        type: 'drupe'
    },
    {
        name: 'cherry',
        type: 'drupe'
    },
    {
        name: 'kiwi',
        type: 'berry'
    }
];

document.querySelector('#app').renderTemplate('#template-app');

```

:star: **If you liked what I did, if it was useful to you or if it served as a starting point for something more magical let me know with a star** :green_heart:
