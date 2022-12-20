# Scrabble
#
# Website
# https://poliwirl765.github.io/Scrabble/
#
#
# Repository
# https://github.com/Poliwirl765/Scrabble
#
#
#
# The implemented features and their status are in order of the Criteria from the pdf
#
# 1. The letters in the rack/hand are randomly distributed using Math.floor and Math.random with ScrabbleTiles[] and letters as seen in initRack()
# 2. Letter tiles can be dragged and dropped through the Draggable and Droppable functions and commands
# 3. The program does correctly identify the tile selected and being dragged with the space it is being dropped in, whether invalid (outside of rack,scrabble line), or validly inside a certain scrabble square
# 4. This implementation of scrabble uses of one the lines from the game which has 4 Triple letter value squares 
# 5. The scrabble game counts the score correctly including the triple letter multiplier (except the blank space in terms of how it should work since I wasn't able to properly implement it being converted into any other letter, so it keeps the value of '0' in my program)
# 6. The program can continue doing as many words as the user chooses until they restart or run out of tiles
# 7. Every time a word is submit, the Scrabble Line is reset for a new word to be input
# 8. The program resets the hand/rack to 7 new tiles (tried to implement it with remembering the tiles that were not used, but I ran out of time and could not figure it out)
# 9. The score is kept until the game is restarted or refreshed by the user
# 10. When dragged, tiles can only be dropped in the rack or Scrabble line, else they are invalid and return back to where they started from drag (rack or scrabble line)
# 11. If the user redecides, they can drag a tile from the scrabble line back to the rack manually or return all with a button
# 12. All letters are free from one another and do not require the user to place them next to one another, I was not able to implement this part with my time. The extra credit of the dictionary was not done either, so the words are not tested for validity and any length of word can be submitted (given the amount of tiles, max 7)
# 13. At any point, the user can restart the game by pressing the restart button or refreshing the page
#
#
# The sources used are cited, with the source links at the top of the page for .js and the sources used (by number) above the function in which they helped contribute/create. 
# 
#
# When the game starts up, the user will start out with a random hand of tiles, given a score of 0, and can see the remaining tiles they have left (after their hand). The remaining tiles are calculated based on the amount of tiles left after the hand, so if you have an 'A' in your hand to start with, the count will say '8', if you submit and the next hand doesn't have an 'A', it will remain at '8'. If the user draws 2 'A's, it will subtact the count immediately. The user can return the tiles to their hand/rack at any point, they can submit a word at any point, and can restart the game at any point. When there are no remaining tiles, the game will finish and the user can see their total score and decide to quit the game or restart the game. If the tile is dragged over another in the scrabble line, it returns the tile, otherwise it is dropped successfully. If a tile is dropped anywhere but the rack or scrabble line, it bounces back. 
#
# Thank you for reading the write-up, good luck with the game!