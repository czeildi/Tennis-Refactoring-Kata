// you can modify this, but keep the arguments
var TennisGame = function (player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

// you should modify but not rename this function
TennisGame.prototype.getScore = function () {
    var score = "";
    let pointNames = ["Love", "Fifteen", "Thirty", "Forty"]

    if (this.P1point === this.P2point) {
        if (this.P1point < 3) {
            score = pointNames[this.P1point] + "-" + "All";
        } else {
            score = "Deuce";
        }
    } else if (this.isEndGameSituation()) {
        if (Math.abs(this.P1point - this.P2point) >= 2) {
            score = "Win for " + this.getNameOfBetterPlayer();
        } else {
            score = "Advantage " + this.getNameOfBetterPlayer();
        }
    } else {
        score = pointNames[this.P1point] + "-" + pointNames[this.P2point];
    }

    return score;
};

TennisGame.prototype.isEndGameSituation = function () {
    return Math.max(this.P1point, this.P2point) > 3;
}

TennisGame.prototype.getNameOfBetterPlayer = function () {
    if (this.P1point > this.P2point) {
        return this.player1Name;
    } else if (this.P2point > this.P1point) {
        return this.player2Name;
    } else {
        return "The players have the same number of points!"
    }
}

TennisGame.prototype.P1Score = function () {
    this.P1point++;
};

TennisGame.prototype.P2Score = function () {
    this.P2point++;
};


/////////////////////////////////////////////////////
////// do not modify functions below this line //////
/////////////////////////////////////////////////////


TennisGame.prototype.SetP1Score = function (number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame.prototype.SetP2Score = function (number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};


TennisGame.prototype.wonPoint = function (player) {
    if (player === this.player1Name)
        this.P1Score();
    else
        this.P2Score();
};


if (typeof window === "undefined") {
    module.exports = TennisGame;
}
