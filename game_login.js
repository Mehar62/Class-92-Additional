function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    player3_name = document.getElementById("player3_name_input").value;
    player4_name = document.getElementById("player4_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    localStorage.setItem("player3_name", player3_name);
    localStorage.setItem("player4_name", player4_name);

    window.location = "game_page.html";
}