# CrossPlayd - Project Charter
### Version History

| Version | Date       | Reason                        |
| ------- | ---------- | ----------------------------- |
| 1       | 21/02/2026 | Initial Project Charter draft |

### Project Management Team 

| Student ID | First Name | Last Name |
| ---------- | ---------- | --------- |
| 89231167   | Aleksandra | Zec       |
| 89231086   | Matej      | Kunovski  |
| 89231138   | Nikola     | Severov   |
| 89231037   | Andrej     | Kaziovski |

All members take on the project manager role, as well as the project client role.
### Links to project

| Platform | Link                                                                                                                                                                                   |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub   | https://github.com/aleksandrazec/CrossPlayd                                                                                                                                            |
| Figma    | https://www.figma.com/proto/HEsaUyWCWtvlzsnrnOBn5R/CrossPlayd?node-id=15-305&t=GmMJEkHxFzyGk50q-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A14 |
## Project description
The purpose of the application *CrossPlayd* is to allow users to track and review video games they've played all in one place. Rather than being a replacement for other video game scoring sites, like *MetaCritic* or *Steam Community Page*, this application focuses on creating a user-based community for every game of interest, no matter if the user owns it and independently of the platform they've played it on. This also allows for logging of older or discontinued games, as well as games that are not available on major platforms.
### Core functionalities
- Users can view a homepage which contains multiple tabs that display different video game categories, like trending, best rated, etc.
- Users can log video games they've played in their library and are able to rate them from 1 to 10. 
- They can categorize the games by marking them with *100 Percented*, *Completed*, *Playing*, *Paused*, *Dropped* and *Plan To Play*.
- Users can pin their favorite games on their profile.
- Users can leave comments on other users' accounts.
- Users can follow other users. In the case both follow each other, they have the status friends.
- Users can look through their following or friends' recent activities by checking the appropriate tab.
- Users can go to the forum page, where they can open new forums or comment on other users' forums.
- Users can inform themselves on video games they're interested in by reading the game description, reading the reviews made by other users and the global rating of the game. 
- Users can interact with other users' reviews by liking and replying to them.
- Users can check out related games of the games' page they are currently on.
## Budget estimate
This is an independent project developed by a small passionate group of developers, and therefore does not necessitate a budget. Note that the budget for the project will not be finalized until the project planning has been completed.
## Delivery deadline
The application with its core functionalities is expected to be delivered by end of June 2026. The project will be divided into key deliverables that will be incrementally implemented starting from February of 2026. Any additional functionalities will be subsequently planned and implemented.

## Personas and problem scenarios

### Marko Miler - The Hardcore Gamer

#### Screening question
How many games have you fully completed, unlocking all the trophies or achievements? 
#### Description
Marko is a hardworking employee that really likes talking to customers and being helpful. He is a video game fanatic and spends a lot of time playing video games with his friends online. Over the years he has built a big collection of video games and consoles. Apart from that Marko also likes going to the gym and he attends anime and video game conventions regularly.

Demographic:
- Age: 28
- Gender: Male
- Marital Status: Single
- Income: €28,332 annually
- Occupation: Big Bang retail worker

Goals:
- Save up money so he can move out to his own apartment.
- Earn a raise and move up in the company.
- Finish all the games on his Bucket List.
#### Perspective

| Perspective | Marko's Point Of View                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------ |
| Thinks      | That his game wish-list is becoming never-ending and he can't keep track of it.                  |
| Sees        | His friends track their video game wish-lists on multiple different platforms.                   |
| Feels       | Overwhelmed from the amount of new games that are coming out soon that he wants to log and play. |
| Does        | Tries to be informed on new games by reading online articles and speaking with his friends.      |
#### Problem Scenarios

| Problem Scenarios                                                                | Alternatives                                                                                     | Value proposition                                              |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| Can't keep track of which games he wants to play and where they are available on | Uses a note application to keep track of them or makes multiple wishlists on different platforms | Keep track of all the games you want to play in the same place |
| Wants to be updated on what games his friend has finished                        | Ask his friend when he has the chance                                                            | He can visit his friend's profile and check his new updates    |
| Wants to show off his gaming collection and all the games he finished            | He shows off to his friends while playing with them                                              | He can make a profile and log his gaming collection easily     |
#### User Stories 

| User Story                                                                                                         | Test Cases                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| As a Hardcore Gamer, I want to log my video games in my library so that I can keep track of my collection.         | - Make sure that you can add video games into your library.<br> - Make sure that games can be sorted by different categories your library.                                                                     |
| As a Hardcore Gamer, I want to be able to see what my friends are playing so that I can keep up with them.         | - Make sure that if two accounts follow each other they are classified as friends. <br> - Make sure that you can see libraries of other accounts.<br> - Make sure that there is a tab to view friend activity. |
| As a Hardcore Gamer, I want to express myself and my interests so that I can show off my collection to my friends. | - Make sure that you can set a favorite game to show up on your account.<br> - Make sure that you can change your profile details.                                                                             |
### Ellie Baker - The Gaming Youtuber
#### Screening question
How many gameplay videos have you made for your social media platform?
#### Description 
Ellie Baker is a passionate gaming influencer that films lengthy gameplays of games her audience recommends to her. Because of her witty humor and problem-solving skills, her fans enjoy watching her content, since it feels like she's taking them with on the adventure. Behind the cameras, she likes hanging out with her friends, watching anime and cuddling with her many pets.

Demographic:
- Age: 24
- Gender: Female
- Marital status: Single
- Income: $140,000 annually
- Occupation: Youtuber

Goals:
- Reach 2 million subscribers on YouTube.
- Move to Los Angeles.
- Become a voice actor for video games.
#### Perspective

| Perspective | Ellie's Point Of View                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Thinks      | Ellie is thinking about some way to connect with her fans further, and possibly reach new audiences.                                                                                         |
| Sees        | Ellie notices that other youtubers are making content across many different social media platforms.                                                                                          |
| Feels       | Ellie has liked playing and talking about video games ever since she was little. She gets fired up when fans want to discuss their views and understandings of the video games she's played. |
| Does        | Ellie uploads gameplay videos on her channel almost everyday.                                                                                                                                |

#### Problem scenarios

| Problem Scenarios                                                                                              | Alternatives                                                                         | Value proposition                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ellie needs a way to keep track of the games she's played for her channel and in her personal time.            | She looks at her upload history on her channel, which is too large to be practical.  | Having a personal tracker where she can put appropriate labels on each game she's played no matter the platform.                                                                                     |
| Ellie wants a way to connect further to her audience, outside of her videos.                                   | She sometimes posts blogs or pictures of what she's doing in her free time.          | Having a place to post her personal reviews and thoughts of the games she's played both on and off camera, would allow her audience to feel closer to her, and could discuss the topics of the game. |
| Ellie needs a way to see what games are currently trending, to know what she should play next for her channel. | She looks at what other gaming influencers are posting or looks up new games online. | Having a place to see what the community is currently reviewing and commenting on would allow her to stay ahead of the curve.                                                                        |

#### User stories

| User story                                                                                                           | Test cases                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| As a gaming youtuber, I want to deepen my relationship with my fans, so that I can strengthen my online persona.     | - Make sure that people can find and follow others by a username.<br>- Make sure that people can like and reply to others reviews.<br>- Make sure that there is a tab of most popular reviewers currently. |
| As a gaming youtuber, I want to know which games are currently popular, to ensure my content is relevant.            | - Make sure that there is a tab of most reviewed games currently.<br>- Make sure that there is a tab of highest reviewed games currently.                                                                  |
| As a gaming youtuber, I want to keep track of my gaming habits, to ensure I don't forget to film specific gameplays. | - Make sure that the game library includes games across different platforms. <br>- Make sure that the games in the library can be categorized with different labels.                                       |

### Jane Garret - Lover of retro and arcade games

#### Screening Question
How many retro or arcade games have you played?
#### Description
Jane Garret is a married mother of two who works as a public defendant in a law firm. She got her law degree at the New York University. She loves gardening, spending time with her family and origami. She used to play video games when she was a child and she grew up with arcade and retro games. She stopped playing video games as she got older.

Demographic:
- Age: 42 
- Gender: Female
- Marital Status: Married
- Income: $92,000 annually
- Occupation: Public Defendant

Goals:
- She wants to spend more time with her family, especially her children.
- She wants to try out new things and hobbies even though they might not work out.
#### Perspective

| Perspective | Jane's Point Of View                                                                                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Thinks      | She liked video games as a child and wants to connect with her kids.                                                                                                        |
| Sees        | She sees there is no place to track what games you've played, especially retro/arcade games.                                                                                |
| Feels       | She feels an old nostalgic feeling to something she loved as a child. She wants to reconnect with her kids but also recapture that love she had for video games as a child. |
| Does        | She watches them and spends time with her kids while they're playing video games.                                                                                           |

#### Problem Scenarios and their Alternatives

| Problem Scenarios                                                    | Alternatives                                                                                                                               | Value proposition                                                                                                            |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| She wants to write down the games all the games she played as a kid. | She can physically write them in a notebook or sending them in a message to her children in a group chat. This is tedious and impractical. | Having a platform where she can track her played games and that being easily viewable would solve her issue.                 |
| She wants to see what games are her kids into.                       | She can walk into their room and look through their gaming collection or she can ask them.                                                 | If there was a platform where she can follow her kids and can track what games they've played, that would solve her problems |

#### User stories

| User story                                                                                                                                                                                                                                | Test cases                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| As a mother of two children, I would like to spend more time with my family and do some fun activities together. I would like to try and find a couple of party games for the whole family that keeps everyone engaged and is interested. | - Make sure that the platform provides search options by genre and user preference.<br>- Make sure that the platform gives the most popular options when searching.                                                                   |
| As a former retro gamer, I would like to replay some of my favourite games from the past and see if my beloved game series have some new additions to try out.                                                                            | - Make sure that the platform provides a wide catalogue of games from past and present.<br>- Make sure that the platform is up to date with the newest sequels or other games linked to a game series (Example: Final fantasy series) |
| As a former gamer that wants to rekindle my spark for video games again, I would like to be able to see opinions and reviews of my fellow gamer buddies.                                                                                  | - Make sure that the platform provides a review system.<br>- Make sure that the review system lets you reply and like reviews/comments provided by the users.                                                                         |

## Approval
This project charter formally authorizes this project based on the information outlined above. Should any of the information change throughout the duration of the project, it shall be discussed between the project management team and documented appropriately.

Approved by: Aleksandra Zec, Matej Kunovski, Nikola Severov, Andrej Kaziovski

Approval Date: February 2026

