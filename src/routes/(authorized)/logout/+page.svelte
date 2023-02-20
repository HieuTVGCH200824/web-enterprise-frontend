<script lang="ts">
    import { enhance } from '$app/forms';
</script>

<form use:enhance method="POST" action="?/logout">
    <button class="btn btn-outline-danger">Or click here to logout.</button>
</form>