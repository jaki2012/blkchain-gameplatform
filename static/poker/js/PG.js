PG = {
    music: null,
    playerInfo: {},
    orientated: false
};

PG.getCookie = function (name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : undefined;
};

PG.PW = 90;
PG.PH = 120;

PG.Boot = {
    preload: function () {
        this.load.image('preloaderBar', 'i/preload.png');
    },
    create: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
        this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        this.onSizeChange();
        this.state.start('Preloader');
    },
    onSizeChange: function () {
        this.scale.minWidth = 480;
        this.scale.minHeight = 270;
        var device = this.game.device;
        if (device.android || device.iOS) {
            this.scale.maxWidth = window.innerWidth;
            this.scale.maxHeight = window.innerHeight;
        } else {
            this.scale.maxWidth = 960;
            this.scale.maxHeight = 540;
        }
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(true);
    },
    enterIncorrectOrientation: function () {
        PG.orientated = false;
        document.getElementById('orientation').style.display = 'block';
    },
    leaveIncorrectOrientation: function () {
        PG.orientated = true;
        document.getElementById('orientation').style.display = 'none';
    }
};

PG.Preloader = {

    preload: function () {
        this.preloadBar = this.game.add.sprite(120, 200, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        this.load.audio('music_bg', 's/bg3.ogg');
        this.load.audio('music_deal', 's/deal.ogg');
        // this.load.audio('music_game', 's/game.ogg');
        this.load.audio('music_win', 's/win.ogg');
        this.load.audio('music_lose', 's/lose.ogg');
        this.load.atlas('btn', 'i/btn.png', 'i/btn.json');
        this.load.image('bg', 'i/bg.png');
        this.load.spritesheet('poker', 'i/poker.png', 90, 120);
        this.load.json('rule', 'rule.json');
    },

    create: function () {
        PG.RuleList = this.cache.getJSON('rule');
        // var jsonVal = document.getElementById("user").value;
        // if (jsonVal) {
        //     // PG.playerInfo = JSON.parse(jsonVal);
        //     // if (PG.playerInfo['uid']) {
        //     //     this.state.start('MainMenu');
        //     // } else {
        //     //     this.state.start('Login');
        //     // }
        //     this.state.start('MainMenu');
        // } else {
        //     this.state.start('Login');
        // }
        this.state.start('Login');
        // PG.music = this.game.add.audio('music_bg');
        // PG.music.loop = true;
        // PG.music.loopFull();
        // PG.music.play();
    }
};

PG.MainMenu = {
    create: function () {
        this.stage.backgroundColor = '#182d3b';
        var bg = this.game.add.sprite(this.game.world.width / 2, 0, 'bg');
        bg.anchor.set(0.5, 0);

        var aiRoom = this.game.add.button(this.game.world.width / 2, this.game.world.height / 4, 'btn', this.gotoAiRoom, this, 'quick.png', 'quick.png', 'quick.png');
        aiRoom.anchor.set(0.5);
        this.game.world.add(aiRoom);

        var humanRoom = this.game.add.button(this.game.world.width / 2, this.game.world.height / 2, 'btn', this.gotoRoom, this, 'start.png', 'start.png', 'start.png');
        humanRoom.anchor.set(0.5);
        this.game.world.add(humanRoom);

        var setting = this.game.add.button(this.game.world.width / 2, this.game.world.height * 3 / 4, 'btn', this.gotoSetting, this, 'setting.png', 'setting.png', 'setting.png');
        setting.anchor.set(0.5);
        this.game.world.add(setting);

        var style = {font: "28px Arial", fill: "#fff", align: "right"};
        var text = this.game.add.text(this.game.world.width - 4, 4, "欢迎回来 " + PG.playerInfo.username, style);
        text.addColor('#cc00cc', 4);
        text.anchor.set(1, 0);
    },

    gotoAiRoom: function () {
        // start(key, clearWorld, clearCache, parameter)
        this.state.start('Game', true, false, 1);
        // this.music.stop();
    },

    gotoRoom: function () {
        this.state.start('Game', true, false, 2);
    },

    gotoSetting: function () {
        var style = {font: "22px Arial", fill: "#fff", align: "center"};
        var text = this.game.add.text(0, 0, "hei hei hei hei", style);
        var tween = this.game.add.tween(text).to({x: 600, y: 450}, 2000, "Linear", true);
        tween.onComplete.add(Phaser.Text.prototype.destroy, text);
    }
};

PG.Login = {
    create: function () {
        this.stage.backgroundColor = '#182d3b';
        var bg = this.game.add.sprite(this.game.width / 2, 0, 'bg');
        bg.anchor.set(0.5, 0);

        var style = {
            font: '24px Arial', fill: '#000', width: 300, padding: 12,
            borderWidth: 1, borderColor: '#c8c8c8', borderRadius: 2,
            textAlign: 'center', placeHolder: '姓名'
            // type: PhaserInput.InputType.password
        };
        this.game.add.plugin(PhaserInput.Plugin);

        this.username = this.game.add.inputField((this.game.world.width - 300) / 2, this.game.world.centerY - 160, style);

        style.placeHolder = '密码';
        this.password = this.game.add.inputField((this.game.world.width - 300) / 2, this.game.world.centerY - 90, style);

        // style.placeHolder = '再次输入密码';
        // this.passwordAgain = this.game.add.inputField((this.game.world.width - 300) / 2, this.game.world.centerY - 15, style);

        var style = {font: "22px Arial", fill: "#f00", align: "center"};
        this.errorText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 45, '', style);
        this.errorText.anchor.set(0.5, 0);

        var login = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, 'btn', this.onLogin, this, 'register.png', 'register.png', 'register.png');
        login.anchor.set(0.5);
    },

    onLogin: function () {
        if (!this.username.value) {
            this.username.startFocus();
            this.errorText.text = '请输入用户名';
            return;
        }
        if (!this.password.value) {
            this.password.startFocus();
            this.errorText.text = '请输入密码';
            return;
        }
        // if (!this.passwordAgain.value) {
        //     this.passwordAgain.startFocus();
        //     this.errorText.text = '请再次输入密码';
        //     return;
        // }
        // if (this.password.value != this.passwordAgain.value) {
        //     this.errorText.text = "两次输入的密码不一致";
        //     return;
        // }

        var httpRequest = new XMLHttpRequest();
        // httpRequest.withCredentials = true;
        var that = this;
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    if (httpRequest.responseText == '1') {
                        that.errorText.text = '该用户名已经被占用';
                    } else {
                        PG.playerInfo = JSON.parse(httpRequest.responseText);
                        that.state.start('MainMenu');
                    }
                } else {
                    console.log('Error:' + httpRequest.status);
                    that.errorText.text = httpRequest.responseText;
                }
            }
        };
        var req = 'username=' + encodeURIComponent(this.username.value) + '&password=' + encodeURIComponent(this.password.value);
        httpRequest.open('GET', 'http://127.0.0.1:8080/reg?'+req, true);
        // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // httpRequest.setRequestHeader('X-Csrftoken', PG.getCookie("_xsrf"));
        httpRequest.send();
    }
};


PG.Game = function(game) {

    this.roomId = 1;
    this.players = [];

    this.titleBar = null;
    this.tableId = 0;
    this.shotLayer = null;

    this.tablePoker = [];
    this.tablePokerPic = {};

    this.lastShotPlayer = null;

    this.whoseTurn = 0;
};

PG.Game.prototype = {

    init: function(roomId) {
        this.roomId = roomId;
    },

    create: function () {
        this.stage.backgroundColor = '#182d3b';

        this.players.push(PG.createPlay(0, this));
        this.players.push(PG.createPlay(1, this));
        this.players.push(PG.createPlay(2, this));

        this.players[0].updateInfo(PG.playerInfo.uid, PG.playerInfo.username);
        PG.Socket.connect(this.onopen.bind(this), this.onmessage.bind(this), this.onerror.bind(this));

        this.createTitleBar();
    },

    onopen: function() {
        console.log('socket onopen');
        PG.Socket.send([PG.Protocol.REQ_JOIN_ROOM, this.roomId]);
    },

    onerror: function() {
        console.log('socket connect onerror');
    },

    send_message: function(request) {
        PG.Socket.send(request);
    },

    onmessage: function(packet) {
        var opcode = packet[0];
        switch(opcode) {
            case PG.Protocol.RSP_JOIN_ROOM:
                if (this.roomId == 1) {
                    PG.Socket.send([PG.Protocol.REQ_JOIN_TABLE, -1]);
                } else {
                    this.createTableLayer(packet[1]);
                }
                break;
            case PG.Protocol.RSP_TABLE_LIST:
                this.createTableLayer(packet[1]);
                break;
            case PG.Protocol.RSP_NEW_TABLE:
                this.tableId = packet[1];
                this.titleBar.text = '房间:' + this.tableId;
                break;
            case PG.Protocol.RSP_JOIN_TABLE:
                this.tableId = packet[1];
                this.titleBar.text = '房间:' + this.tableId;
                var playerIds = packet[2];
                for (var i = 0; i < playerIds.length; i++) {
                    if (playerIds[i][0] == this.players[0].uid) {
                        var info_1 = playerIds[(i+1)%3];
                        var info_2 = playerIds[(i+2)%3];
                        this.players[1].updateInfo(info_1[0], info_1[1]);
                        this.players[2].updateInfo(info_2[0], info_2[1]);
                        break;
                    }
                }
                break;
            case PG.Protocol.RSP_DEAL_POKER:
                var playerId = packet[1];
                var pokers = packet[2];
                this.dealPoker(pokers);
                this.whoseTurn = this.uidToSeat(playerId);
                this.startCallScore(0);
                break;
            case PG.Protocol.RSP_CALL_SCORE:
                var playerId = packet[1];
                var score = packet[2];
                var callend = packet[3];
                this.whoseTurn = this.uidToSeat(playerId);

                var hanzi = ['不叫', "一分", "两分", "三分"];
                this.players[this.whoseTurn].say(hanzi[score]);
                if (!callend) {
                    this.whoseTurn = (this.whoseTurn + 1) % 3;
                    this.startCallScore(score);
                }
                break;
            case PG.Protocol.RSP_SHOW_POKER:
                this.whoseTurn = this.uidToSeat(packet[1]);
                this.tablePoker[0] = packet[2][0];
                this.tablePoker[1] = packet[2][1];
                this.tablePoker[2] = packet[2][2];
                this.players[this.whoseTurn].setLandlord();
                this.showLastThreePoker();
                break;
            case PG.Protocol.RSP_SHOT_POKER:
                this.handleShotPoker(packet);
                break;
            case PG.Protocol.RSP_GAME_OVER:
                var winner = packet[1];
                var coin = packet[2];

                var loserASeat = this.uidToSeat(packet[3][0]);
                this.players[loserASeat].replacePoker(packet[3], 1);
                this.players[loserASeat].reDealPoker();

                var loserBSeat = this.uidToSeat(packet[4][0]);
                this.players[loserBSeat].replacePoker(packet[4], 1);
                this.players[loserBSeat].reDealPoker();

                this.whoseTurn = this.uidToSeat(winner);
            function gameOver() {
                alert(this.players[this.whoseTurn].isLandlord ? "地主赢" : "农民赢");
            }
                this.game.time.events.add(1000, gameOver, this);
                break;
            case PG.Protocol.RSP_CHEAT:
                var seat = this.uidToSeat(packet[1]);
                this.players[seat].replacePoker(packet[2], 0);
                this.players[seat].reDealPoker();
                break;
            default:
                console.log("UNKNOWN PACKET:", packet)
        }
    },

    update: function () {
    },

    uidToSeat: function (uid) {
        for (var i = 0; i < 3; i++) {
            if (uid == this.players[i].uid)
                return i;
        }
        console.log('ERROR uidToSeat:' + uid);
        return -1;
    },

    dealPoker: function(pokers) {

        for (var i = 0; i < 3; i++) {
            var p = new PG.Poker(this, 54, 54);
            this.game.world.add(p);
            this.tablePoker[i] = p.id;
            this.tablePoker[i + 3] = p;
        }

        for (var i = 0; i < 17; i++) {
            this.players[2].pokerInHand.push(54);
            this.players[1].pokerInHand.push(54);
            this.players[0].pokerInHand.push(pokers.pop());
        }

        this.players[0].dealPoker();
        this.players[1].dealPoker();
        this.players[2].dealPoker();
        //this.game.time.events.add(1000, function() {
        //    this.send_message([PG.Protocol.REQ_CHEAT, this.players[1].uid]);
        //    this.send_message([PG.Protocol.REQ_CHEAT, this.players[2].uid]);
        //}, this);
    },

    showLastThreePoker: function() {
        for (var i = 0; i < 3; i++) {
            var pokerId = this.tablePoker[i];
            var p = this.tablePoker[i + 3];
            p.id = pokerId;
            p.frame = pokerId;
            this.game.add.tween(p).to({ x: this.game.world.width/2 + (i - 1) * 60}, 600, Phaser.Easing.Default, true);
        }
        this.game.time.events.add(1500, this.dealLastThreePoker, this);
    },

    dealLastThreePoker: function() {
        var turnPlayer = this.players[this.whoseTurn];

        for (var i = 0; i < 3; i++) {
            var pid = this.tablePoker[i];
            var poker = this.tablePoker[i + 3];
            turnPlayer.pokerInHand.push(pid);
            turnPlayer.pushAPoker(poker);
        }
        turnPlayer.sortPoker();
        if (this.whoseTurn == 0) {
            turnPlayer.arrangePoker();
            for (var i = 0; i < 3; i++) {
                var p = this.tablePoker[i + 3];
                var tween = this.game.add.tween(p).to({y: this.game.world.height - PG.PH * 0.8 }, 400, Phaser.Easing.Default, true);
                function adjust(p) {
                    this.game.add.tween(p).to({y: this.game.world.height - PG.PH /2}, 400, Phaser.Easing.Default, true, 400);
                };
                tween.onComplete.add(adjust, this, p);
            }
        } else {
            var first = turnPlayer.findAPoker(54);
            for (var i = 0; i < 3; i++) {
                var p = this.tablePoker[i + 3];
                p.frame = 54;
                p.frame = 54;
                this.game.add.tween(p).to({ x: first.x, y: first.y}, 200, Phaser.Easing.Default, true);
            }
        }

        this.tablePoker = [];
        this.lastShotPlayer = turnPlayer;
        if (this.whoseTurn == 0) {
            this.startPlay();
        }
    },

    handleShotPoker: function(packet) {
        this.whoseTurn = this.uidToSeat(packet[1]);
        var turnPlayer = this.players[this.whoseTurn];
        var pokers = packet[2];
        if (pokers.length == 0) {
            this.players[this.whoseTurn].say("不出");
        } else {
            var pokersPic = {};
            pokers.sort(PG.Poker.comparePoker);
            var count= pokers.length;
            var gap = Math.min((this.game.world.width - PG.PW * 2) / count, PG.PW * 0.36);
            for (var i = 0; i < count; i++) {
                var p = turnPlayer.findAPoker(pokers[i]);
                p.id = pokers[i];
                p.frame = pokers[i];
                p.bringToTop();
                this.game.add.tween(p).to({ x: this.game.world.width/2 + (i - count/2) * gap, y: this.game.world.height * 0.4}, 500, Phaser.Easing.Default, true);

                turnPlayer.removeAPoker(pokers[i]);
                pokersPic[p.id] = p;
            }

            for (var i = 0; i < this.tablePoker.length; i++) {
                var p = this.tablePokerPic[this.tablePoker[i]];
                // p.kill();
                p.destroy();
            }
            this.tablePoker = pokers;
            this.tablePokerPic = pokersPic;
            this.lastShotPlayer = turnPlayer;
            turnPlayer.arrangePoker();
        }
        if (turnPlayer.pokerInHand.length > 0) {
            this.whoseTurn = (this.whoseTurn + 1) % 3;
            if (this.whoseTurn == 0) {
                this.game.time.events.add(1000, this.startPlay, this);
            }
        }
    },

    startCallScore: function(minscore) {
        function btnTouch(btn) {
            this.send_message([PG.Protocol.REQ_CALL_SCORE, btn.score]);
            btn.parent.destroy();
        };

        if (this.whoseTurn == 0) {
            var step = this.game.world.width/6;
            var ss = [1.5, 1, 0.5, 0];
            var sx = this.game.world.width/2 - step * ss[minscore];
            var sy = this.game.world.height * 0.6;
            var group = this.game.add.group();
            var pass = this.game.make.button(sx, sy, "btn", btnTouch, this, 'score_0.png', 'score_0.png', 'score_0.png');
            pass.anchor.set(0.5, 0);
            pass.score = 0;
            group.add(pass);
            sx += step;

            for (var i = minscore + 1; i <= 3; i++) {
                var tn = 'score_' + i + '.png';
                var call = this.game.make.button(sx, sy, "btn", btnTouch, this, tn, tn, tn);
                call.anchor.set(0.5, 0);
                call.score = i;
                group.add(call);
                sx += step;
            }
        } else {
            // TODO show clock on player
        }

    },

    startPlay: function() {
        if (this.isLastShotPlayer()) {
            this.players[0].playPoker([]);
        } else {
            this.players[0].playPoker(this.tablePoker);
        }
    },

    finishPlay: function(pokers) {
        this.send_message([PG.Protocol.REQ_SHOT_POKER, pokers]);
    },

    isLastShotPlayer: function() {
        return this.players[this.whoseTurn] == this.lastShotPlayer;
    },

    createTableLayer: function (tables) {
        tables.push([-1, 0]);

        var group = this.game.add.group();
        this.game.world.bringToTop(group);
        var gc = this.game.make.graphics(0, 0);
        gc.beginFill(0x00000080);
        gc.endFill();
        group.add(gc);
        var style = {font: "22px Arial", fill: "#fff", align: "center"};

        for (var i = 0; i < tables.length; i++) {
            var sx = this.game.world.width * (i%6 + 1)/(6 + 1);
            var sy = this.game.world.height * (Math.floor(i/6) + 1)/(4 + 1);

            var table = this.game.make.button(sx, sy, 'btn', this.onJoin, this, 'table.png', 'table.png', 'table.png');
            table.anchor.set(0.5, 1);
            table.tableId = tables[i][0];
            group.add(table);

            var text = this.game.make.text(sx, sy, '房间:' + tables[i][0] + '人数:' + tables[i][1], style);
            text.anchor.set(0.5, 0);
            group.add(text);

            if (i == tables.length - 1) {
                text.text = '新建房间';
            }
        }
    },

    quitGame: function () {
        this.state.start('MainMenu');
    },

    createTitleBar: function() {
        var style = {font: "22px Arial", fill: "#fff", align: "center"};
        this.titleBar = this.game.add.text(this.game.world.centerX, 0, '房间:', style);
    },

    onJoin: function (btn) {
        if (btn.tableId == -1) {
            this.send_message([PG.Protocol.REQ_NEW_TABLE]);
        } else {
            this.send_message([PG.Protocol.REQ_JOIN_TABLE, btn.tableId]);
        }
        btn.parent.destroy();
    }
};

PG.Poker = function (game, id, frame) {

    Phaser.Sprite.call(this, game, game.world.width / 2, game.world.height * 0.4, 'poker', frame);

    this.anchor.set(0.5);
    this.id = id;

    return this;
};

PG.Poker.prototype = Object.create(Phaser.Sprite.prototype);
PG.Poker.prototype.constructor = PG.Poker;

PG.Poker.comparePoker = function (a, b) {

    if (a instanceof Array) {
        a = a[0];
        b = b[0];
    }


    if (a >= 52 || b >= 52) {
        return -(a - b);
    }
    a = a % 13;
    b = b % 13;
    if (a == 1 || a == 0) {
        a += 13;
    }
    if (b == 1 || b == 0) {
        b += 13;
    }
    return -(a - b);
};

PG.Poker.toCards = function (pokers) {
    var cards = [];
    for (var i = 0; i < pokers.length; i++) {
        var pid = pokers[i];
        if (pid instanceof Array) {
            pid = pid[0];
        }
        if (pid == 52) {
            cards.push('W');
        } else if (pid == 53) {
            cards.push('w');
        } else {
            cards.push("A234567890JQK"[pid % 13]);
        }
    }
    return cards;

};

PG.Poker.canCompare = function (pokersA, pokersB) {
    var cardsA = this.toCards(pokersA);
    var cardsB = this.toCards(pokersB);
    return PG.Rule.cardsValue(cardsA)[0] == PG.Rule.cardsValue(cardsB)[0];
};

PG.Poker.toPokers = function (pokerInHands, cards) {
    var pokers = [];
    for (var i = 0; i < cards.length; i++) {
        var candidates = this.toPoker(cards[i]);
        for (var j = 0; j < candidates.length; j++) {
            if (pokerInHands.indexOf(candidates[j]) != -1 && pokers.indexOf(candidates[j]) == -1) {
                pokers.push(candidates[j]);
                break
            }
        }
    }
    return pokers;
};

PG.Poker.toPoker = function (card) {

    var cards = "A234567890JQK";
    for (var i = 0; i < 13; i++) {
        if (card == cards[i]) {
            return [i, i + 13, i + 13 * 2, i + 13 * 3];
        }
    }
    if (card == 'W') {
        return [52];
    } else if (card == 'w') {
        return [53];
    }
    return [54];

};

PG.Rule = {};

PG.Rule.cardsAbove = function (handCards, turnCards) {

    var turnValue = this.cardsValue(turnCards);
    if (turnValue[0] == '') {
        return '';
    }
    handCards.sort(this.sorter);
    var oneRule = PG.RuleList[turnValue[0]];
    for (var i = turnValue[1] + 1; i < oneRule.length; i++) {
        if (this.containsAll(handCards, oneRule[i])) {
            return oneRule[i];
        }
    }

    if (turnValue[1] < 1000) {
        oneRule = PG.RuleList['bomb'];
        for (var i = 0; i < oneRule.length; i++) {
            if (this.containsAll(handCards, oneRule[i])) {
                return oneRule[i];
            }
        }
        if (this.containsAll(handCards, 'wW')) {
            return 'wW';
        }
    }

    return '';
};

PG.Rule.bestShot = function (handCards) {

    handCards.sort(this.sorter);
    var shot = '';
    var len = this._CardsType.length;
    for (var i = 2; i < len; i++) {
        var oneRule = PG.RuleList[this._CardsType[i]];
        for (var j = 0; j < oneRule.length; j++) {
            if (oneRule[j].length > shot.length && this.containsAll(handCards, oneRule[j])) {
                shot = oneRule[j];
            }
        }
    }

    if (shot == '') {
        oneRule = PG.RuleList['bomb'];
        for (var i = 0; i < oneRule.length; i++) {
            if (this.containsAll(handCards, oneRule[i])) {
                return oneRule[i];
            }
        }
        if (this.containsAll(handCards, 'wW'))
            return 'wW';
    }

    return shot;
};

PG.Rule._CardsType = [
    'rocket', 'bomb',
    'single', 'pair', 'trio', 'trio_pair', 'trio_single',
    'seq_single5', 'seq_single6', 'seq_single7', 'seq_single8', 'seq_single9', 'seq_single10', 'seq_single11', 'seq_single12',
    'seq_pair3', 'seq_pair4', 'seq_pair5', 'seq_pair6', 'seq_pair7', 'seq_pair8', 'seq_pair9', 'seq_pair10',
    'seq_trio2', 'seq_trio3', 'seq_trio4', 'seq_trio5', 'seq_trio6',
    'seq_trio_pair2', 'seq_trio_pair3', 'seq_trio_pair4', 'seq_trio_pair5',
    'seq_trio_single2', 'seq_trio_single3', 'seq_trio_single4', 'seq_trio_single5',
    'bomb_pair', 'bomb_single'];

PG.Rule.sorter = function (a, b) {
    var card_str = '34567890JQKA2wW';
    return card_str.indexOf(a) - card_str.indexOf(b);
};

PG.Rule.index_of = function (array, ele) {
    if (array[0].length != ele.length) {
        return -1;
    }
    for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] == ele) {
            return i;
        }
    }
    return -1;
};

PG.Rule.containsAll = function (parent, child) {
    var index = 0;
    for (var i = 0, l = child.length; i < l; i++) {
        index = parent.indexOf(child[i], index);
        if (index == -1) {
            return false;
        }
        index += 1;
    }
    return true;
};

PG.Rule.cardsValue = function (cards) {

    if (typeof(cards) != 'string') {
        cards.sort(this.sorter);
        cards = cards.join('');
    }

    if (cards == 'wW')
        return ['rocket', 2000];

    var index = this.index_of(PG.RuleList['bomb'], cards);
    if (index >= 0)
        return ['bomb', 1000 + index];

    var length = this._CardsType.length;
    for (var i = 2; i < length; i++) {
        var typeName = this._CardsType[i];
        var index = this.index_of(PG.RuleList[typeName], cards);
        if (index >= 0)
            return [typeName, index];
    }
    console.log('Error: UNKNOWN TYPE ', cards);
    return ['', 0];
};

PG.Rule.compare = function (cardsA, cardsB) {

    if (cardsA.length == 0 && cardsB.length == 0) {
        return 0;
    }
    if (cardsA.length == 0) {
        return -1;
    }
    if (cardsB.length == 0) {
        return 1;
    }

    var valueA = this.cardsValue(cardsA);
    var valueB = this.cardsValue(cardsB);

    if ((valueA[1] < 1000 && valueB[1] < 1000) && (valueA[0] != valueB[0])) {
        console.log('Error: Compare ', cardsA, cardsB);
    }

    return valueA[1] - valueB[1];
};

PG.Rule.shufflePoker = function () {
    var pokers = [];
    for (var i = 0; i < 54; i++) {
        pokers.push(i);
    }

    var currentIndex = pokers.length, temporaryValue, randomIndex;
    while (0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = pokers[currentIndex];
        pokers[currentIndex] = pokers[randomIndex];
        pokers[randomIndex] = temporaryValue;
    }
    return pokers;
};

PG.createPlay = function (seat, game) {
    var player = seat == 0 ? new PG.Player(seat, game) : new PG.NetPlayer(seat, game);
    var xy = [
        PG.PW / 2, game.world.height - PG.PH - 10,
        game.world.width - PG.PW / 2, 94,
        PG.PW / 2, 94
    ];
    player.initUI(xy[seat * 2], xy[seat * 2 + 1]);
    if (seat == 0) {
        player.initShotLayer();
    } else if (seat == 1) {
        player.uiHead.scale.set(-1, 1);
    }
    return player;
};

PG.Player = function (seat, game) {
    this.uid = seat;
    this.seat = seat;
    this.game = game;

    this.pokerInHand = [];
    this._pokerPic = {};
    this.isLandlord = false;

    this.hintPoker = [];
    this.isDraging = false;
};

PG.Player.prototype.initUI = function (sx, sy) {
    this.uiHead = this.game.add.sprite(sx, sy, 'btn', 'icon_default.png');
    this.uiHead.anchor.set(0.5, 1);
};

PG.Player.prototype.updateInfo = function (uid, name) {
    this.uid = uid;
    if (uid == -1) {
        this.uiHead.frameName = 'icon_default.png';
    } else {
        this.uiHead.frameName = 'icon_farmer.png';
    }
};

PG.Player.prototype.initShotLayer = function () {
    this.shotLayer = this.game.add.group();
    var group = this.shotLayer;

    var sy = this.game.world.height * 0.6;
    var pass = this.game.make.button(0, sy, "btn", this.onPass, this, 'pass.png', 'pass.png', 'pass.png');
    pass.anchor.set(0.5, 0);
    group.add(pass);
    var hint = this.game.make.button(0, sy, "btn", this.onHint, this, 'hint.png', 'hint.png', 'hint.png');
    hint.anchor.set(0.5, 0);
    group.add(hint);
    var shot = this.game.make.button(0, sy, "btn", this.onShot, this, 'shot.png', 'shot.png', 'shot.png');
    shot.anchor.set(0.5, 0);
    group.add(shot);

    group.forEach(function (child) {
        child.kill();
    });
};

PG.Player.prototype.setLandlord = function () {
    this.isLandlord = true;
    this.uiHead.frameName = 'icon_landlord.png';
};

PG.Player.prototype.say = function (str) {

    var style = {font: "22px Arial", fill: "#ffffff", align: "center"};
    var sx = this.uiHead.x + this.uiHead.width / 2 + 10;
    var sy = this.uiHead.y - this.uiHead.height * 0.5;
    var text = this.game.add.text(sx, sy, str, style);
    if (this.uiHead.scale.x == -1) {
        text.x = text.x - text.width - 10;
    }
    this.game.time.events.add(2000, text.destroy, text);
};

PG.Player.prototype.onInputDown = function (poker, pointer) {
    this.isDraging = true;
    this.onSelectPoker(poker, pointer);
};

PG.Player.prototype.onInputUp = function (poker, pointer) {
    this.isDraging = false;
    //this.onSelectPoker(poker, pointer);
};

PG.Player.prototype.onInputOver = function (poker, pointer) {
    if (this.isDraging) {
        this.onSelectPoker(poker, pointer);
    }
};

PG.Player.prototype.onSelectPoker = function (poker, pointer) {
    var index = this.hintPoker.indexOf(poker.id);
    if (index == -1) {
        poker.y = this.game.world.height - PG.PH * 0.8;
        this.hintPoker.push(poker.id);
    } else {
        poker.y = this.game.world.height - PG.PH * 0.5;
        this.hintPoker.splice(index, 1);
    }
};

PG.Player.prototype.onPass = function (btn) {
    this.game.finishPlay([]);
    this.pokerUnSelected(this.hintPoker);
    this.hintPoker = [];
    btn.parent.forEach(function (child) {
        child.kill();
    });
};

PG.Player.prototype.onHint = function (btn) {
    if (this.hintPoker.length == 0) {
        this.hintPoker = this.lastTurnPoker;
    } else {
        this.pokerUnSelected(this.hintPoker);
        if (this.lastTurnPoker.length > 0 && !PG.Poker.canCompare(this.hintPoker, this.lastTurnPoker)) {
            this.hintPoker = [];
        }
    }
    var bigger = this.hint(this.hintPoker);
    if (bigger.length == 0) {
        if (this.hintPoker == this.lastTurnPoker) {
            this.say("没有能大过的牌");
        } else {
            this.pokerUnSelected(this.hintPoker);
        }
    } else {
        this.pokerSelected(bigger);
    }
    this.hintPoker = bigger;
};

PG.Player.prototype.onShot = function (btn) {
    if (this.hintPoker.length == 0) {
        return;
    }
    var code = this.canPlay(this.game.isLastShotPlayer() ? [] : this.game.tablePoker, this.hintPoker);
    if (code) {
        this.say(code);
        return;
    }
    this.game.finishPlay(this.hintPoker);
    this.hintPoker = [];
    btn.parent.forEach(function (child) {
        child.kill();
    });
};


PG.Player.prototype.hint = function (lastTurnPoker) {
    var cards;
    var handCards = PG.Poker.toCards(this.pokerInHand);
    if (lastTurnPoker.length === 0) {
        cards = PG.Rule.bestShot(handCards);
    } else {
        cards = PG.Rule.cardsAbove(handCards, PG.Poker.toCards(lastTurnPoker));
    }

    return PG.Poker.toPokers(this.pokerInHand, cards);
};

PG.Player.prototype.canPlay = function (lastTurnPoker, shotPoker) {
    var cardsA = PG.Poker.toCards(shotPoker);
    var valueA = PG.Rule.cardsValue(cardsA);
    if (!valueA[0]){
        return '出牌不合法';
    }
    var cardsB = PG.Poker.toCards(lastTurnPoker);
    if (cardsB.length == 0) {
        return '';
    }
    var valueB = PG.Rule.cardsValue(cardsB);
    if (valueA[0] != valueB[0] && valueA[1] < 1000) {
        return '出牌类型跟上家不一致';
    }

    if (valueA[1] > valueB[1]) {
        return '';
    }
    return '出牌需要大于上家';
};

PG.Player.prototype.playPoker = function (lastTurnPoker) {
    this.lastTurnPoker = lastTurnPoker;

    var group = this.shotLayer;
    var step = this.game.world.width / 6;
    var sx = this.game.world.width / 2 - 0.5 * step;
    if (!this.game.isLastShotPlayer()) {
        sx -= 0.5 * step;
        var pass = group.getAt(0);
        pass.centerX = sx;
        sx += step;
        pass.revive();
    }
    var hint = group.getAt(1);
    hint.centerX = sx;
    hint.revive();
    var shot = group.getAt(2);
    shot.centerX = sx + step;
    shot.revive();

    this.enableInput();
};

PG.Player.prototype.sortPoker = function () {
    this.pokerInHand.sort(PG.Poker.comparePoker);
};

PG.Player.prototype.dealPoker = function () {
    this.sortPoker();
    var length = this.pokerInHand.length;
    for (var i = 0; i < length; i++) {
        var pid = this.pokerInHand[i];
        var p = new PG.Poker(this.game, pid, pid);
        this.game.world.add(p);
        this.pushAPoker(p);
        this.dealPokerAnim(p, i);
    }
};

PG.Player.prototype.dealPokerAnim = function (p, i) {
    //to(properties, duration, ease, autoStart, delay, repeat, yoyo)
    this.game.add.tween(p).to({
        x: this.game.world.width / 2 + PG.PW * 0.44 * (i - 8.5),
        y: this.game.world.height - PG.PH / 2
    }, 500, Phaser.Easing.Default, true, 50 * i);
};

PG.Player.prototype.arrangePoker = function () {
    var count = this.pokerInHand.length;
    var gap = Math.min(this.game.world.width / count, PG.PW * 0.44);
    for (var i = 0; i < count; i++) {
        var pid = this.pokerInHand[i];
        var p = this.findAPoker(pid);
        p.bringToTop();
        this.game.add.tween(p).to({x: this.game.world.width / 2 + (i - count / 2) * gap}, 600, Phaser.Easing.Default, true);
    }
};

PG.Player.prototype.pushAPoker = function (poker) {
    this._pokerPic[poker.id] = poker;

    poker.events.onInputDown.add(this.onInputDown, this);
    poker.events.onInputUp.add(this.onInputUp, this);
    poker.events.onInputOver.add(this.onInputOver, this);
};

PG.Player.prototype.removeAPoker = function (pid) {
    var length = this.pokerInHand.length;
    for (var i = 0; i < length; i++) {
        if (this.pokerInHand[i] === pid) {
            this.pokerInHand.splice(i, 1);
            delete this._pokerPic[pid];
            return;
        }
    }
    console.log('Error: REMOVE POKER ', pid);
};

PG.Player.prototype.findAPoker = function (pid) {
    var poker = this._pokerPic[pid];
    if (poker === undefined) {
        console.log('Error: FIND POKER ', pid);
    }
    return poker;
};

PG.Player.prototype.enableInput = function () {
    var length = this.pokerInHand.length;
    for (var i = 0; i < length; i++) {
        var p = this.findAPoker(this.pokerInHand[i]);
        p.inputEnabled = true;
    }
};

PG.Player.prototype.pokerSelected = function (pokers) {
    for (var i = 0; i < pokers.length; i++) {
        var p = this.findAPoker(pokers[i]);
        p.y = this.game.world.height - PG.PH * 0.8;
    }
};

PG.Player.prototype.pokerUnSelected = function (pokers) {
    for (var i = 0; i < pokers.length; i++) {
        var p = this.findAPoker(pokers[i]);
        p.y = this.game.world.height - PG.PH / 2;
    }
};


PG.NetPlayer = function (seat, game) {
    PG.Player.call(this, seat, game);
    this._pokerPic = [];
};

PG.NetPlayer.prototype = Object.create(PG.Player.prototype);
PG.NetPlayer.prototype.constructor = PG.NetPlayer;

PG.NetPlayer.prototype.pushAPoker = function (poker) {
    this._pokerPic.push(poker);
    this.updateLeftPoker();
};

PG.NetPlayer.prototype.removeAPoker = function (pid) {
    for (var i = this.pokerInHand.length - 1; i >= 0; i--) {
        if (this.pokerInHand[i] === pid) {
            this.pokerInHand.splice(i, 1);
            break
        }
    }
    if (i == -1) {
        this.pokerInHand.pop();
    }
    for (var i = this._pokerPic.length - 1; i >= 0; i--) {
        if (this._pokerPic[i].id === pid) {
            this._pokerPic.splice(i, 1);
            break
        }
    }
    if (i == -1) {
        this._pokerPic.pop();
    }
    this.updateLeftPoker();
};

PG.NetPlayer.prototype.arrangePoker = function () {
    if (this.pokerInHand.length > 0 && this.pokerInHand[0] < 54) {
        // PG.Player.prototype.arrangePoker.call(this);
        this.reDealPoker();
    }
};

PG.NetPlayer.prototype.replacePoker = function (pokers, start) {
    if (this.pokerInHand.length !== pokers.length - start) {
        console.log("ERROR ReplacePoker:", this.pokerInHand, pokers);
    }
    if (this._pokerPic.length !== pokers.length - start) {
        console.log("ERROR ReplacePoker:", this._pokerPic, pokers);
    }
    var length = this.pokerInHand.length;
    for (var i = 0; i < length; i++) {
        this.pokerInHand[i] = pokers[start + i];
        this._pokerPic[i].id = pokers[start + i];
        this._pokerPic[i].frame = pokers[start + i];
    }
};

PG.NetPlayer.prototype.findAPoker = function (pid) {
    for (var i = this._pokerPic.length - 1; i >= 0; i--) {
        if (this._pokerPic[i].id == pid) {
            return this._pokerPic[i];
        }
    }
    return this._pokerPic[this._pokerPic.length - 1];
};

PG.NetPlayer.prototype.reDealPoker = function () {
    this.sortPoker();
    var length = this.pokerInHand.length;
    for (var i = 0; i < length; i++) {
        var pid = this.pokerInHand[i];
        var p = this.findAPoker(pid);
        p.bringToTop();
        this.dealPokerAnim(p, this.seat == 1 ? length-1-i : i);
    }
};

PG.NetPlayer.prototype.dealPokerAnim = function (p, i) {
    var width = this.game.world.width;
    if (p.id > 53) {
        this.game.add.tween(p).to({
            x: this.seat == 1 ? width - PG.PW/2 : PG.PW/2,
            y: this.seat == 1 ? this.uiHead.y + PG.PH/2 + 10 : this.uiHead.y + PG.PH/2 + 10
        }, 500, Phaser.Easing.Default, true, 25 + 50 * i);
    } else {
        this.game.add.tween(p).to({
            x: this.seat == 1 ? (width - PG.PW/2) - (i * PG.PW * 0.44) : PG.PW/2 + i * PG.PW * 0.44,
            y: this.seat == 1 ? this.uiHead.y + PG.PH/2 + 10 : this.uiHead.y + PG.PH * 1.5 + 20
        }, 500, Phaser.Easing.Default, true, 50 * i);
    }
};

PG.NetPlayer.prototype.initUI = function (sx, sy) {
    PG.Player.prototype.initUI.call(this, sx, sy);
    var style = {font: "22px Arial", fill: "#ffffff", align: "center"};
    this.uiLeftPoker = this.game.add.text(sx, sy + PG.PH + 10, '17', style);
    this.uiLeftPoker.anchor.set(0.5, 0);
    this.uiLeftPoker.kill();

    var style = {font: "20px Arial", fill: "#c8c8c8", align: "center"};
    if (this.seat == 1) {
        this.uiName = this.game.add.text(sx - 40, sy - 80, '等待玩家加入', style);
        this.uiName.anchor.set(1, 0);
    } else {
        this.uiName = this.game.add.text(sx + 40, sy - 80, '等待玩家加入', style);
        this.uiName.anchor.set(0, 0);
    }
};


PG.NetPlayer.prototype.updateInfo = function (uid, name) {
    PG.Player.prototype.updateInfo.call(this, uid, name);
    if (uid == -1) {
        this.uiName.text = '等待玩家加入';
    } else {
        this.uiName.text = name;
    }
};

PG.NetPlayer.prototype.updateLeftPoker = function () {
    var len = this.pokerInHand.length;
    if (len > 0) {
        this.uiLeftPoker.text = "" + this.pokerInHand.length;
        this.uiLeftPoker.revive();
    } else {
        this.uiLeftPoker.kill();
    }
};


PG.Protocol = {
    REQ_CHEAT : 1,
    RSP_CHEAT : 2,

    REQ_LOGIN : 11,
    RSP_LOGIN : 12,

    REQ_ROOM_LIST  : 13,
    RSP_ROOM_LIST  : 14,

    REQ_TABLE_LIST : 15,
    RSP_TABLE_LIST : 16,

    REQ_JOIN_ROOM : 17,
    RSP_JOIN_ROOM : 18,

    REQ_JOIN_TABLE : 19,
    RSP_JOIN_TABLE : 20,

    REQ_NEW_TABLE : 21,
    RSP_NEW_TABLE : 22,

    REQ_DEAL_POKER : 31,
    RSP_DEAL_POKER : 32,

    REQ_CALL_SCORE : 33,
    RSP_CALL_SCORE : 34,

    REQ_SHOW_POKER : 35,
    RSP_SHOW_POKER : 36,

    REQ_SHOT_POKER : 37,
    RSP_SHOT_POKER : 38,

    REQ_GAME_OVER : 41,
    RSP_GAME_OVER : 42,

    REQ_CHAT : 43,
    RSP_CHAT : 44
};

PG.Socket = {
    websocket: null,
    onmessage: null
};

PG.Socket.connect = function(onopen, onmessage, onerror) {

    if (this.websocket != null) {
        return;
    }

    this.websocket = new WebSocket("ws://127.0.0.1:8080/ws?token="+PG.playerInfo['token']);
    this.websocket.binaryType = 'arraybuffer';
    this.websocket.onopen = function(evt) {
        console.log("CONNECTED");
        onopen();
    };

    this.websocket.onerror = function(evt) {
        console.log('CONNECT ERROR: ' + evt.data);
        onerror();
    };

    this.websocket.onclose = function(evt) {
        console.log("DISCONNECTED");
        this.websocket = null;
    };

    this.websocket.onmessage = function(evt) {
        console.log('RSP: ' + evt.data);
        onmessage(JSON.parse(evt.data));
    };
};

PG.Socket.send = function(msg) {
    console.log('REQ: ' + msg);
    this.websocket.send(JSON.stringify(msg));
};
