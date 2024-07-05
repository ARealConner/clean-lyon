<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Linkedin, Mail, ExternalLink } from 'lucide-svelte';
	import { base } from '$app/paths';

	let visible = false;

	interface TeamMember {
		name: string;
		major: string;
		image: string;
		linkedin?: string;
		email: string;
	}

	const teamMembers: TeamMember[] = [
		{
			name: 'Casey LaMarca',
			major: 'Chemical Engineering',
			image: '/images/casey.png',
			linkedin: 'N/A',
			email: 'cjlamarca@wpi.edu'
		},
		{
			name: 'Conner Olsen',
			major: 'Computer Science & Mathematics',
			image: '/images/conner.png',
			linkedin: 'https://www.linkedin.com/in/conneraolsen/',
			email: 'colsen@wpi.edu'
		},
		{
			name: 'Ming Tang',
			major: 'Physics',
			image: '/images/ming.jpg',
			linkedin: 'https://www.linkedin.com/in/ming-tang-7397091aa/',
			email: 'mtang2@wpi.edu'
		},
		{
			name: 'Nolan Willoughby',
			major: 'Industrial Engineering',
			image: '/images/nolan.jpg',
			linkedin: 'https://www.linkedin.com/in/nolan-willoughby-71a943213/',
			email: 'nrwilloughby@wpi.edu'
		}
	];

	interface Advisor {
		name: string;
		title: string;
		image: string;
		description: string;
		staffPage: string;
	}

	const advisors: Advisor[] = [
		{
			name: 'Dr. Grant Burrier',
			title: 'Department of Social Science & Policy Studies, WPI',
			image: '/images/grant-burrier.jpg',
			description:
				"Dr. Burrier's expertise in global studies and sustainable development was instrumental in shaping our research methodology and analysis.",
			staffPage: 'https://www.wpi.edu/people/faculty/gburrier'
		},
		{
			name: 'Dr. Tahar El-Korchi',
			title: 'Department of Civil, Environmental, & Architectural Engineering, WPI',
			image: '/images/tahar-el-korchi.jpg',
			description:
				"Dr. El-Korchi's extensive knowledge in civil and environmental engineering provided crucial insights into the technical aspects of urban waste management systems.",
			staffPage: 'https://www.wpi.edu/people/faculty/tek'
		}
	];

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8" in:fade={{ duration: 1000 }}>
		<h1
			class="mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent"
		>
			About CleanLyon
		</h1>

		<section class="mb-12">
			<h2 class="mb-4 text-2xl font-semibold">Our Mission</h2>
			<p class="mb-4 text-lg">
				CleanLyon was an International Qualifying Project (IQP) conducted by a team of Worcester
				Polytechnic Institute (WPI) students. Our mission was to analyze and document Lyon's
				innovative urban waste management practices, creating a comprehensive case study that can
				inspire and guide other cities in improving their waste management systems.
			</p>
		</section>

		<section class="mb-12">
			<h2 class="mb-4 text-2xl font-semibold">The Project</h2>
			<p class="mb-4 text-lg">
				Our project focused on several key aspects of Lyon's waste management system:
			</p>
			<ul class="mb-4 list-inside list-disc text-lg">
				<li>Analyzing collection infrastructure and practices</li>
				<li>Studying waste reduction initiatives</li>
				<li>Examining recycling and composting programs</li>
				<li>Investigating incineration and energy recovery methods</li>
				<li>Assessing public education and engagement strategies</li>
			</ul>
			<p class="text-lg">
				Through extensive research, interviews with local experts, and on-site observations, we
				aimed to provide a detailed understanding of what made Lyon's system effective and how these
				practices could be adapted for use in other urban environments.
			</p>
		</section>

		<section class="mb-12">
			<h2 class="mb-4 text-2xl font-semibold">Our Team</h2>
			<p class="mb-4 text-lg">
				The CleanLyon team consisted of four WPI students from diverse academic backgrounds:
			</p>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each teamMembers as member}
					<div class="overflow-hidden rounded-lg bg-white shadow-lg">
						<div class="h-80 overflow-hidden">
							<img
								src={`${base}${member.image}`}
								alt={member.name}
								class="h-full w-full object-cover object-top"
							/>
						</div>
						<div class="p-4">
							<h3 class="text-xl font-semibold">{member.name}</h3>
							<p class="text-gray-600">{member.major}</p>
							<div class="mt-4 flex space-x-2">
								{#if member.linkedin}
									<a
										href={member.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										class="text-blue-500 hover:text-blue-600"
									>
										<Linkedin size={20} />
									</a>
								{/if}
								<a href={`mailto:${member.email}`} class="text-gray-500 hover:text-gray-600">
									<Mail size={20} />
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="mb-12">
			<h2 class="mb-4 text-2xl font-semibold">On-site Project Coordinators</h2>
			<p class="mb-4 text-lg">
				Our two project coordinators provided invaluable guidance and support in Lyon:
			</p>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each advisors as advisor}
					<div class="overflow-hidden rounded-lg bg-white shadow-lg">
						<div class="h-80 overflow-hidden">
							<img
								src={`${base}${advisor.image}`}
								alt={advisor.name}
								class="h-full w-full object-cover object-top"
							/>
						</div>
						<div class="p-6">
							<h3 class="mb-2 text-xl font-semibold">{advisor.name}</h3>
							<p class="mb-2 text-gray-600">{advisor.title}</p>
							<p class="mb-4 text-lg">{advisor.description}</p>
							<a
								href={advisor.staffPage}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center text-blue-500 hover:text-blue-600"
							>
								View Profile <ExternalLink size={16} class="ml-1" />
							</a>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="mb-12">
			<h2 class="mb-4 text-2xl font-semibold">Project Sponsor</h2>
			<div class="overflow-hidden rounded-lg bg-white shadow-lg">
				<div class="relative" style="height: 600px;">
					<img
						src={`${base}/images/drew-brodeur.jpg`}
						alt="Dr. Drew Brodeur"
						class="absolute inset-0 h-full w-full object-cover object-top"
					/>
				</div>
				<div class="p-6">
					<h3 class="mb-2 text-xl font-semibold">Professor Drew Brodeur</h3>
					<p class="mb-2 text-gray-600">Department of Chemistry & Biochemistry, WPI</p>
					<p class="mb-4 text-lg">
						Professor Brodeur sponsored our project, providing the initial vision and ongoing
						support. His expertise in environmental chemistry and passion for sustainable practices
						were key drivers in the success of our research.
					</p>
					<a
						href="https://www.wpi.edu/people/faculty/dbrodeur"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center text-blue-500 hover:text-blue-600"
					>
						View Profile <ExternalLink size={16} class="ml-1" />
					</a>
				</div>
			</div>
		</section>

		<section>
			<h2 class="mb-4 text-2xl font-semibold">Get Involved</h2>
			<p class="mb-4 text-lg">
				We believe that effective waste management is crucial for creating sustainable, livable
				cities. If you're interested in learning more about urban waste management or have insights
				to share, we'd love to hear from you!
			</p>
			<p class="text-lg">
				Contact us at: <a href="mailto:gr-cleanlyon@wpi.edu" class="text-blue-500 hover:underline"
					>gr-cleanlyon@wpi.edu</a
				>
			</p>
		</section>
	</div>
{/if}

<style>
	h1,
	h2,
	h3 {
		font-family: 'Poppins', sans-serif;
	}
	p,
	li {
		font-family: 'Open Sans', sans-serif;
	}
</style>

