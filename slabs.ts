import fs from 'node:fs';

const slabBlockMappings = {
	oak_slab: 'oak_planks',
	spruce_slab: 'spruce_planks',
	birch_slab: 'birch_planks',
	jungle_slab: 'jungle_planks',
	acacia_slab: 'acacia_planks',
	dark_oak_slab: 'dark_oak_planks',
	mangrove_slab: 'mangrove_planks',
	cherry_slab: 'cherry_planks',
	pale_oak_slab: 'pale_oak_planks',
	bamboo_slab: 'bamboo_planks',
	bamboo_mosaic_slab: 'bamboo_mosaic',
	crimson_slab: 'crimson_planks',
	warped_slab: 'warped_planks',

	stone_slab: 'stone',
	cobblestone_slab: 'cobblestone',
	mossy_cobblestone_slab: 'mossy_cobblestone',
	smooth_stone_slab: 'smooth_stone',
	stone_brick_slab: 'stone_bricks',
	mossy_stone_brick_slab: 'mossy_stone_bricks',

	granite_slab: 'granite',
	polished_granite_slab: 'polished_granite',
	diorite_slab: 'diorite',
	polished_diorite_slab: 'polished_diorite',
	andesite_slab: 'andesite',
	polished_andesite_slab: 'polished_andesite',

	cobbled_deepslate_slab: 'cobbled_deepslate',
	polished_deepslate_slab: 'polished_deepslate',
	deepslate_brick_slab: 'deepslate_bricks',
	deepslate_tile_slab: 'deepslate_tiles',
	tuff_slab: 'tuff',
	polished_tuff_slab: 'polished_tuff',
	tuff_brick_slab: 'tuff_bricks',

	brick_slab: 'bricks',
	mud_brick_slab: 'mud_bricks',
	resin_brick_slab: 'resin_bricks',

	sandstone_slab: 'sandstone',
	smooth_sandstone_slab: 'smooth_sandstone',
	cut_sandstone_slab: 'cut_sandstone',
	red_sandstone_slab: 'red_sandstone',
	smooth_red_sandstone_slab: 'smooth_red_sandstone',
	cut_red_sandstone_slab: 'cut_red_sandstone',

	prismarine_slab: 'prismarine',
	prismarine_brick_slab: 'prismarine_bricks',
	dark_prismarine_slab: 'dark_prismarine',

	nether_brick_slab: 'nether_bricks',
	red_nether_brick_slab: 'red_nether_bricks',
	blackstone_slab: 'blackstone',
	polished_blackstone_slab: 'polished_blackstone',
	polished_blackstone_brick_slab: 'polished_blackstone_bricks',

	end_stone_brick_slab: 'end_stone_bricks',
	purpur_slab: 'purpur_block',
	quartz_slab: 'quartz_block',
	smooth_quartz_slab: 'smooth_quartz',

	cut_copper_slab: 'cut_copper',
	exposed_cut_copper_slab: 'exposed_cut_copper',
	weathered_cut_copper_slab: 'weathered_cut_copper',
	oxidized_cut_copper_slab: 'oxidized_cut_copper',
	waxed_cut_copper_slab: 'waxed_cut_copper',
	waxed_exposed_cut_copper_slab: 'waxed_exposed_cut_copper',
	waxed_weathered_cut_copper_slab: 'waxed_weathered_cut_copper',
	waxed_oxidized_cut_copper_slab: 'waxed_oxidized_cut_copper',
};

for (const [slab, block] of Object.entries(slabBlockMappings)) {
	const recipe = {
		type: 'minecraft:crafting_shaped',
		category: 'building',
		pattern: ['#', '#'],
		key: {
			'#': `minecraft:${slab}`,
		},
		result: {
			id: `minecraft:${block}`,
			count: 1,
		},
	};

	const filename = `./src/mc/data/beehaviour/recipe/slab_${block}.json`;

	fs.writeFileSync(filename, JSON.stringify(recipe, null, '\t') + '\n');
}
