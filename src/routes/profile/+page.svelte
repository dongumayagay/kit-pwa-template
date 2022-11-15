<script>
	import { generateAvatar } from '$lib/utils';

	const NAME = 'Don Gumayagay';

	const avatar = generateAvatar(NAME, 'male');
</script>

<img class="mask mask-circle w-48" src={avatar} alt="avatar" />
<select class="select w-full max-w-xs">
	<option disabled selected>Pick your favorite anime</option>
	<option>One Piece</option>
	<option>Naruto</option>
	<option>Death Note</option>
	<option>Attack on Titan</option>
	<option>Bleach</option>
	<option>Fullmetal Alchemist</option>
	<option>Jojo's Bizarre Adventure</option>
</select>

<input type="range" min="0" max="100" value="25" class="range" step="25" />
<div class="w-full flex justify-between text-xs px-2">
	<span>|</span>
	<span>|</span>
	<span>|</span>
	<span>|</span>
	<span>|</span>
</div>
<!-- The button to open modal -->
<label for="my-modal-6" class="btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<label for="my-modal-6" class="btn">Yay!</label>
		</div>
	</div>
</div>
<label class="swap swap-flip text-9xl">
	<!-- this hidden checkbox controls the state -->
	<input class=" invisible" type="checkbox" />

	<div class="swap-on">😈</div>
	<div class="swap-off">😇</div>
</label>
