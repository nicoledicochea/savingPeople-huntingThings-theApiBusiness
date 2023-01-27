# Saving People, Hunting Things, The API Business
All the character data from the CW's television series *Supernatural* that anyone could ever want.

<p align="center">
<img alt="Screenshot of Saving People, Hunting Things, The API Business" src="https://user-images.githubusercontent.com/111663583/201507344-ad0ea063-1408-4794-ad52-dde4f7f3b189.gif"></img>
</p>

**Link to project:** [Saving People, Hunting Things, The API Business](https://supernatural-the-api-business.onrender.com/)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.JS, Express, Heroku

A collection of character information:

- Name
- Name Meaning
- Seasons
- Species
- Alias
- Occupation
- Affiliation
- Family
- Portrayed By
- Deaths

## Optimizations

I would love to add the following:
- More characters. I've gotten through a good chunk of them, but I'd ideally love to get through all characters that appeared in the show for at least three or more episodes.
- Expand on the API documentation beyond what is written in the Github ReadMe.
- Add an About page to the site itself

## Lessons Learned:
I have learned the beauty of the Express public folder and the frustrated hair-pulling that results when you forget to use it. I kept wondering why my CSS and client-side JS were not properly rendering. 

It was only after I got through the addition of about 10 characters in a single object that I realized the better way to organize the data would have been with Classes. I should have created a Character Class and added characters that way.

Also, since I started this project, I have worked more with Databases. My goal for this project was to create my own API. But, I can understand how I could easily use MongoDB to create a Supernatural Characters collection and each individual character would be a document in that collection.

## Acknowledgements
The Supernatural series and its data is the property of The CW.

All data was collected from open free sources such as [Supernatural Wiki](https://supernatural.fandom.com/wiki/Supernatural_Wiki).

Heavily inspired by [An API of Ice and Fire](https://anapioficeandfire.com/). Absolutely loved the Try It Out feature, which is something I incorporated on my site.

## Examples:
Take a look at other apps I've created using public APIs:

- [San Jose Solar Seekers Picture of the Day](https://github.com/nicoledicochea/nasa-picture-of-the-day)
- [The Best Advice No One Told You](https://github.com/nicoledicochea/advice-bot)
- [Picturesque](https://github.com/nicoledicochea/picturesque-pixabay-api)
- [So It Prose...](https://github.com/nicoledicochea/poetry-api)
