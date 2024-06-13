
import json

discs = [
	"music_disc_13",
	"music_disc_cat",
	"music_disc_blocks",
	"music_disc_chirp",
	"music_disc_far",
	"music_disc_mall",
	"music_disc_mellohi",
	"music_disc_stal",
	"music_disc_strad",
	"music_disc_ward",
	"music_disc_wait",
	"music_disc_otherside"
]

for disc in discs:
	recipe = {
		"type": "minecraft:stonecutting",
		"ingredient": { "item": f"minecraft:{disc}" },
		"result": { "id": f"minecraft:music_disc_11", "count": 1 }
	}
	filename = f"data/beehave/recipes/broken_{disc}.json"
	with open(filename, 'w') as f:
		json.dump(recipe, f, indent="\t")

print(f"Recipes saved in directory!")
