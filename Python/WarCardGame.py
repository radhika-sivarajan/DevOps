# "War" here are the basic rules:

# The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places his stack of cards face down, in front of him.

# The Play: Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack. If the cards are the same rank, it is War. Each player turns up three cards face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on. There are some more variations on this but we will keep it simple for now. Ignore "double" wars

# https://en.wikipedia.org/wiki/War_(card_game)

from random import shuffle

# Two useful variables for creating Cards.
SUITE = 'H D S C'.split()
RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()


class Deck:
    """
    This is the Deck Class. This object will create a deck of cards to initiate play.
    You can then use this Deck list of cards to split in half and give to the players.
    It will use SUITE and RANKS to create the deck. It should also have a method for
    splitting/cutting the deck in half and Shuffling the deck.
    """
    def __init__(self):
        self.allcards = [(s,r) for s in SUITE for r in RANKS]  # Ordered deck

    def shuffle(self):
        shuffle(self.allcards) # Shuffle deck

    def split_in_half(self):
        return (self.allcards[:26],self.allcards[26:])


class Hand:
    '''
    This is the Hand class. Each player has a Hand, and can add or remove
    cards from that hand. There should be an add and remove card method here.
    '''
    def __init__(self,cards):
        self.cards = cards

    def __str__(self):
        return "Contain {} cards".format(len(self.cards))

    def add_cards(self, addcards):
        self.cards.extend(addcards)

    def remove_cards(self):
        self.cards.pop()


class Player:
    """
    This is the Player class, which takes in a name and an instance of a Hand
    class object. The Payer can then play cards and check if they still have cards.
    """
    def  __init__(self, name, hand):
        self.name = name
        self.hand = hand

    def play_card(self):
        drawn_card = self.hand.remove_cards()
        print("{} placed card {} /n".format(self.name, drawn_card))
        return drawn_card

    def remove_war_cards(self):
        war_cards = []
        if len(self.hand.cards) < 3:
            return war_cards
        else:
            for x in range(3):
                war_cards.append(self.hand.cards.pop(0))
                # war_cards.append(self.hand.remove_cards())
            return war_cards

    def still_has_cards(self):
        """
        Returns True if player still has cards
        """
        return len(self.hand.cards) != 0


# Play Game
print(Deck().split_in_half()[1])
# Create New Deck and split in half
d = Deck()
d.shuffle()
half1,half2 = d.split_in_half()
