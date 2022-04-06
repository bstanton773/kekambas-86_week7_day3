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


request = input('What song would you like to hear? ').title()
song = download_song(request)
play_song(song)


