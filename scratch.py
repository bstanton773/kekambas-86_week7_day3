import time


def first():
    time.sleep(2)
    print('First')
    time.sleep(2)


def second():
    print('Second')


# first()
# second()



# Real Life Example
# You have a function that will take in a song name, download the song, and then from that download, you can play the song

def download_song(song_name):
    print(f'Downloading {song_name}...')
    time.sleep(3)
    return {'title': song_name, 'artist': 'Brian'}


def play_song(song):
    print(f"{song['title']} by {song['artist']} is playing")


# request = input('What song would you like to hear? ').title()
# song = download_song(request)
# play_song(song)


def get_user(user_id):
    time.sleep(1)
    return {'id': user_id, 'username': 'johnqsample'}

def get_user_orders(user):
    time.sleep(2)
    return [{'name': 'A', 'price': 1}, {'name': 'B', 'price': 2}, {'name': 'C', 'price': 3}]

def get_order_total(order):
    time.sleep(3)
    return sum([p['price'] for p in order])


def get_user_total_from_id(user_id):
    user = get_user(user_id)
    order = get_user_orders(user)
    total = get_order_total(order)
    print(f"Your total is ${total}")



get_user_total_from_id(123)
