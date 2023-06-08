<script>
    import { AMG_Count } from "../stores/car";
    import { FER_Count } from "../stores/car";
    import { AST_Count } from "../stores/car";
</script>

<div class="car-list-container">
    
    <div class="car aston">
        <div class="photo paston">
            <!-- <img src="src/assets/AMG_GTR.jpg" alt="AMG_GTR"> -->
        </div>
        <div class="info">
            <button on:click={AMG_Count.decrement} class="remove">-</button>
            <h2>{$AMG_Count ? $AMG_Count: "$1234"}</h2>
            <button on:click={AMG_Count.increment} class="add">+</button>
        </div>
    </div>
    <div class="car ferrari">
        <div class="photo pferrari">

        </div>
        <div class="info">
            <button on:click={FER_Count.decrement} class="remove">-</button>
            <h2>{$FER_Count ? $FER_Count: "$1234"}</h2>
            <button on:click={FER_Count.increment} class="add">+</button>
        </div>
    </div>
    <div class="car merc">
        <div class="photo pmerc">

        </div>
        <div class="info">
            <button on:click={AST_Count.increment} class="remove">-</button>
            <h2>{$AST_Count ? $AST_Count: "$1234"}</h2>
            <button on:click={AST_Count.increment} class="add">+</button>
        </div>
    </div>
    <div class="car lambo">
        <div class="photo plambo">

        </div>
        <div class="info">
            <button class="remove">-</button>
            <h2>$1234</h2>
            <button class="add">+</button>
        </div>
    </div>
    <div class="car porche">
        <div class="photo pporche">

        </div>
        <div class="info">
            <button class="remove">-</button>
            <h2>$1234</h2>
            <button class="add">+</button>
        </div>
    </div>
    <div class="car pagani">
        <div class="photo ppagani">

        </div>
        <div class="info">
            <button class="remove">-</button>
            <h2>$1234</h2>
            <button class="add">+</button>
        </div>
    </div>
</div>

<style>
    .car-list-container {
        /* width: 100vw;
        height: 100vh; */
        display: flex;
        column-gap: 7rem;
        row-gap: 3rem;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }
    .car {
        width: 28rem;
        height: 22rem;
    }
    .car .photo {
        height: 70%;
    }
    .car .info {
        background-color: rgb(0, 0, 0);
        filter: opacity(0.1px);
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 2rem;
    }
    .info button {
        border: none;
        height: 4rem;
        width: 4rem;
        border-radius: 2rem;
        font-size: 30px;
    }

    .paston {
        background-image: url(../assets/Aston.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    }
    .pmerc {
        background-image: url(../assets/AMG_GTR.jpg);
        background-size: cover;
        background-repeat: no-repeat;

    }
    .pferrari {
        background-image: url(../assets/Ferrari.jpg);
        background-size: cover;
        background-repeat: no-repeat;

    }
    .pporche {
        background-image: url(../assets/Porche.jpg);
        background-size: cover;
        background-repeat: no-repeat;

    }
    .plambo {
        background-image: url(../assets/Lambo.jpg);
        background-size: cover;
        background-repeat: no-repeat;

    }
</style>