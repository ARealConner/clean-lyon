<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type { Icon } from 'lucide-svelte';
	import {
		Trash2,
		Recycle,
		Apple,
		Shirt,
		LightbulbIcon,
		Truck,
		Home,
		Building,
		MapPin
	} from 'lucide-svelte';

	interface Option {
		title: string;
		icon?: ComponentType<Icon>;
		pros: string[];
		cons: string[];
	}

	interface WasteType {
		title: string;
		icon: ComponentType<Icon>;
		options: Option[];
		recommendation: string;
	}

	const wasteTypes: WasteType[] = [
		{
			title: 'Waste Collection',
			icon: Truck,
			options: [
				{
					title: 'Household Collection',
					icon: Home,
					pros: [
						'Convenient for residents',
						'Higher participation rates',
						'Better control over waste sorting'
					],
					cons: [
						'Higher operational costs',
						'More labor-intensive',
						'Potential traffic congestion in dense areas'
					]
				},
				{
					title: 'Centralized Collection Centers',
					icon: Building,
					pros: [
						'Efficient for large volumes',
						'Can handle various waste streams',
						'Potential for on-site sorting and processing'
					],
					cons: [
						'Less convenient for residents',
						'Requires residents to transport waste',
						'May require larger land area'
					]
				},
				{
					title: 'Public Collection Bins',
					icon: MapPin,
					pros: [
						'Convenient for daily disposal',
						'Can be placed strategically in high-traffic areas',
						'Encourages waste separation'
					],
					cons: [
						'Requires frequent collection',
						'Potential for misuse or overflow',
						'May be aesthetically unpleasing if not well-maintained'
					]
				}
			],
			recommendation:
				'Implement a hybrid collection system combining household collection for general waste with strategically placed public collection bins for glass, plastic, paper, and compost. Maintain centralized collection centers for larger items and less frequent waste streams. This multi-faceted approach, as demonstrated in Lyon, maximizes convenience, encourages proper sorting, and optimizes resource recovery. Ensure a high density of public bins and use data analytics to optimize collection routes and frequencies.'
		},
		{
			title: 'General Waste',
			icon: Trash2,
			options: [
				{
					title: 'Incineration',
					pros: [
						'Reduces waste volume by up to 95%',
						'Enables energy recovery',
						'Requires less land than landfills',
						'Lower overall greenhouse gas emissions compared to landfills',
						'Destroys harmful pathogens and toxic compounds'
					],
					cons: [
						'Higher initial investment',
						'Requires consistent waste input',
						'Produces some air pollutants (requires proper controls)',
						'May discourage recycling efforts if not properly managed'
					]
				},
				{
					title: 'Landfill',
					pros: [
						'Lower initial cost',
						'Can handle various types of waste',
						'Potential for methane capture and energy recovery'
					],
					cons: [
						'Requires large land area',
						'Higher overall greenhouse gas emissions, especially methane',
						'Potential for soil and groundwater contamination',
						'Long-term environmental liabilities',
						'Limited energy recovery potential compared to incineration'
					]
				}
			],
			recommendation:
				'For urban areas with limited land availability and high energy demands, incineration with energy recovery is often the preferred option. However, it should be implemented with state-of-the-art emission control systems and as part of a comprehensive waste management strategy that prioritizes recycling and composting. Landfills may be more suitable for rural areas with available land, but should incorporate methane capture systems.'
		},
		{
			title: 'Recyclables',
			icon: Recycle,
			options: [
				{
					title: 'Single-stream Recycling',
					pros: [
						'More convenient for residents',
						'Higher participation rates',
						'Lower collection costs'
					],
					cons: [
						'Higher processing costs',
						'Increased contamination rates',
						'Lower quality of recycled materials'
					]
				},
				{
					title: 'Multi-stream Recycling',
					pros: [
						'Higher quality of recycled materials',
						'Lower processing costs',
						'Lower contamination rates'
					],
					cons: [
						'Less convenient for residents',
						'Potentially lower participation rates',
						'Higher collection costs'
					]
				}
			],
			recommendation:
				'Implement a multi-stream recycling system to ensure higher quality of recycled materials and lower processing costs. While it may be slightly less convenient for residents, the benefits in material quality and reduced contamination outweigh this drawback. Invest heavily in public education and clear, consistent labeling to ensure high participation rates and proper sorting. Consider providing sorting bins to residents to facilitate proper separation at home.'
		},
		{
			title: 'Organic Waste',
			icon: Apple,
			options: [
				{
					title: 'Composting',
					pros: [
						'Produces valuable fertilizer',
						'Low emissions',
						'Suitable for various organic wastes'
					],
					cons: [
						'Requires separate collection',
						'Takes time to produce usable compost',
						'Potential odor issues'
					]
				},
				{
					title: 'Methanization',
					pros: [
						'Produces renewable energy (biogas)',
						'Reduces methane emissions from landfills',
						'Creates digestate for fertilizer'
					],
					cons: [
						'High initial investment',
						'Requires consistent feedstock',
						'Less efficient for food waste than agricultural waste'
					]
				}
			],
			recommendation:
				"For urban areas, composting is often the more suitable option due to its simplicity and lower investment costs. It's particularly effective when combined with community gardens or urban farming initiatives. Methanization may be more appropriate for areas with large amounts of agricultural waste or for regional facilities serving multiple communities."
		},
		{
			title: 'Textiles',
			icon: Shirt,
			options: [
				{
					title: 'Dedicated Collection',
					pros: [
						'Enables reuse and recycling',
						'Reduces overall waste volume',
						'Potential for economic benefits'
					],
					cons: [
						'Requires separate collection infrastructure',
						'Varying quality of collected textiles',
						'Market fluctuations for recycled textiles'
					]
				},
				{
					title: 'Integration with General Waste',
					pros: ['Simpler collection process', 'No additional infrastructure needed'],
					cons: [
						'Loss of potentially reusable/recyclable materials',
						'Increases volume of general waste',
						'Missed opportunity for resource recovery'
					]
				}
			],
			recommendation:
				'Implementing a dedicated textile collection system is recommended, as it significantly reduces waste volume and allows for reuse and recycling. Partner with local charities or social enterprises to manage collection and sorting. For smaller communities, consider regional cooperation to achieve economies of scale.'
		}
	];
</script>

<div class="mx-auto max-w-4xl rounded-lg bg-green-50 p-8 shadow-lg">
	<h1 class="mb-8 text-center text-4xl font-bold text-green-800">Urban Waste Management Options</h1>
	<h2 class="mb-12 text-center text-2xl font-semibold text-green-600">
		Based on the case study of Lyon, France
	</h2>

	{#each wasteTypes as type}
		<div class="mb-8">
			<div class="mb-4 flex items-center">
				<div class="mr-4 rounded-full bg-green-100 p-3">
					<svelte:component this={type.icon} size={40} />
				</div>
				<h3 class="text-2xl font-semibold text-green-700">{type.title}</h3>
			</div>
			{#each type.options as option}
				<div class="mb-4 rounded-lg bg-white p-4 shadow-md">
					<h4 class="mb-2 text-lg font-semibold">{option.title}</h4>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<h5 class="font-medium text-green-700">Pros:</h5>
							<ul class="list-disc pl-5">
								{#each option.pros as pro}
									<li class="text-sm">{pro}</li>
								{/each}
							</ul>
						</div>
						<div>
							<h5 class="font-medium text-red-700">Cons:</h5>
							<ul class="list-disc pl-5">
								{#each option.cons as con}
									<li class="text-sm">{con}</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{/each}
			<div class="mb-4 rounded-lg bg-blue-100 p-4 shadow-md">
				<div class="mb-2 flex items-center">
					<LightbulbIcon size={24} class="mr-2 text-blue-700" />
					<h5 class="font-semibold text-blue-700">Recommendation:</h5>
				</div>
				<p class="text-blue-800">{type.recommendation}</p>
			</div>
		</div>
	{/each}

	<div class="mt-12 text-center">
		<p class="font-semibold text-green-700">
			Cities should consider these options and recommendations in the context of their local needs,
			infrastructure, and environmental goals to develop efficient and sustainable waste management
			systems.
		</p>
	</div>
</div>
