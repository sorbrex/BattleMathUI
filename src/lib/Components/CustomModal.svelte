<script>
    import { getModalContext } from 'smodale';
    //const { hide, cancel } = getModalContext();
    const { cancel } = getModalContext();

</script>

<h1>Game Over</h1>
<div class="modalFooter">
    <button type="button" class="baseButton" on:click={cancel}>Exit</button>
<!--    <button type="button" class="baseButton" on:click={hide}>Restart</button>-->
</div>

<style>
    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .modalFooter {
        margin-top: 2rem;
        display: flex;
        justify-content: space-around;
        gap: 1rem;
    }

    .baseButton{
        width: 250px;
        border-radius: 10px;
        border: 2px solid #f2f2f2;
        padding: 1rem;
        font-size: 1.2rem;
        background-color: #2f4858;
        color: #f2f2f2;
        cursor: pointer;
    }

</style>