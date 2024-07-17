body {
    background-color: #212529;
    color: #fff;
    font-family: sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
}

.container {
    padding: 20px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 20px rgba(255, 182, 193, 0.6); /* Initial glow color: baby pink */
    z-index: 1;
    transition: box-shadow 0.5s ease-in-out;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.currency-row {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.currency-row input {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    width: 30%;
    font-size: 16px;
    background-color: #ececec;
    margin-right: 10px;
}

.currency-row select {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 30%;
}

.currency-row button {
    border: none;
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    width: 20%;
}
