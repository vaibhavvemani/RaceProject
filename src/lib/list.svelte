<script>
    import { AMG_Count } from "../stores/car";
    import { FER_Count } from "../stores/car";
</script>

<div class="car-list-container">
    
    <div class="car aston">
        <div class="photo aston">

        </div>
        <div class="info">
            <button on:click={AMG_Count.decrement} class="remove">-</button>
            <h2>{$AMG_Count ? $AMG_Count: "$1234"}</h2>
            <button on:click={AMG_Count.increment} class="add">+</button>
        </div>
    </div>
    <div class="car ferrari">
        <div class="photo ferrari">

        </div>
        <div class="info">
            <button on:click={FER_Count.decrement} class="remove">-</button>
            <h2>{$FER_Count ? $FER_Count: "$1234"}</h2>
            <button on:click={FER_Count.increment} class="add">+</button>
        </div>
    </div>
    <div class="car merc">
        <div class="photo merc">

        </div>
        <div class="info">
            <button class="remove">-</button>
            <h2>$1234</h2>
            <button class="add">+</button>
        </div>
    </div>
    <div class="car lambo">
        <div class="photo lambo">

        </div>
        <div class="info">
            <button class="remove">-</button>
            <h2>$1234</h2>
            <button class="add">+</button>
        </div>
    </div>
    <div class="car porche">
        <div class="photo porche">

        </div>
        <div class="info">
            <button class="remove">-</button>
            <h2>$1234</h2>
            <button class="add">+</button>
        </div>
    </div>
    <div class="car pagani">
        <div class="photo pagani">

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
        background-color: beige;
    }
    .car .photo {
        background-color: red;
        height: 70%;
    }
    .car .info {
        background-color: blue;
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
</style>