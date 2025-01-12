'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7096fc33f2713131599326db7a3e8427",
".git/config": "01c9dbfa671585ad0b2b6e644b08bfb8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f7e93c06717ed03550b4174c6f863491",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2f503c59655db9707b5b860fe9eea081",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6f3672629ef59f8290a084623ac9155d",
".git/logs/refs/heads/main": "1b042341ca125660d82915bba73be07e",
".git/logs/refs/remotes/origin/main": "663e7b981d7d23b734cd142ecb3b1dbc",
".git/objects/00/7ada76e52ef0395edc5f04bdba07a7bc591bdc": "320981b9c7a3b0b1f9ed3dc22fce8014",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/e3e0391110260a22c9a117e2bfdee4e93b8aed": "64f112422d8dd2cb11f476e7691f2aca",
".git/objects/07/7137b1774b5f78588d8b866a1a53d5a791f0e4": "a72ce3747094f69a184c842da47e42de",
".git/objects/0a/1aa74ef14d4a57524a71f42c6f27452623c518": "0d55cbf628bfcd495ba0ef6febe46556",
".git/objects/0a/a6af3458025d67b21359c602b88cb2d6c98dc9": "f7eff94b854ea108fecd482c694f7159",
".git/objects/0c/d7811e5830af382cbac75ba4ab42b3965f72a5": "320bb4484b32c4a61dc43a266ddd8b0b",
".git/objects/0d/266fbd427f92f8fd662df902986c3b0e536db3": "fe0a4ef8887aed18ece7a88e80029e48",
".git/objects/0e/c28253c2c6844b44d80322fe78d69dafdfd567": "788e366bec1253da7d7c10126168b1d0",
".git/objects/0f/014e173183c489d519427d0a71ae860d9faecf": "20ccdaabaeaba06bd0055e38f2ff6fab",
".git/objects/0f/ff514b63798da55b26bb607b227bdf140845bb": "699bca991de3aa6a49bf14dff242e6f7",
".git/objects/11/80fd0b2de56f1b06b7652bdfee0b2e08904821": "2eeee13d7997a6acdb582e4e74b6e77b",
".git/objects/13/b70cd06d463096a1cdaa3d9bf1c87c28ace74d": "8d834d665aea42002634698109653caf",
".git/objects/15/51fc447e86f7976facd7e4763ef7fd55bda1d6": "c9f2c1f150fc85d40a3515d6be27210d",
".git/objects/16/0bbb63289a4e4dee73be1ebe609ed3b2120234": "37660abf8a69d0037c14133b4665abcc",
".git/objects/17/854d08dbeb1a6d5b112f374a890227f5af4f81": "f33a10e208ba74305d9373d81d635dc6",
".git/objects/18/10d33a96521a63cfdc7b796e456de873db1120": "2910448e9bb147e92f333d19f165e25f",
".git/objects/19/ef5701bbea5ebc36854dc392bc2c67a0db91b3": "66ee5b1a0cffa62cd86ad3361bdc06df",
".git/objects/1a/fc7aab64e05dffc7d10214534e49b428d97def": "4b1865d98ad327b79576a4173648e1c8",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/1689494e5743535a0fb91a239e6f9a61df88e6": "970643896b2dd757f5b6358f0ad50e57",
".git/objects/23/a9bee4ff4d1399ce24a2341609083e6d756d0e": "2fe6e2849b0c796830803cc65f19be60",
".git/objects/23/fd6d4a9b4ce9a8e68e88721c0b46b2a6d5e2a6": "2aa54e77edd64bc601767a8286019780",
".git/objects/25/055d735f7859bb575f032a06de72d7dab31bdb": "d6bdea45fe441caca612701d7eaa7e0e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/0ae77a1c55afdbfcd42cf1d0fa6a7e706e6527": "fb48886acc1335fd99e1ef81d815da6e",
".git/objects/26/6d49ec1ee905be6a7a4dc24c51c20a0b91fa3b": "b77e347eab85d1c03d4271d620370c00",
".git/objects/26/854bbbf94beea3266d789d0ac1a03807d7f129": "71fa05c45882440e37ed4c208947a527",
".git/objects/26/9db8327334b5e9f7900ac350210b9d987cb820": "5081ec6089230d073f1f93e84641cee1",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/39a00f4ed0311bb823ea98cbf70f3b0bae0e85": "d3c9c0ec109d55f393d5aedf58e1c5bf",
".git/objects/28/a4053a163f992c52decb160b9f1044dd341794": "ece8bb3e70eb80006780cddc902de2ca",
".git/objects/29/2e19eab13e92b678eb56b151e3f23c22a919be": "caeb931b29a2a6d81dc15e17cae391be",
".git/objects/29/6aa36b8d7ce7c3e885a8a27a4c692d3426fcf5": "68f0aab35a298d8e85b0fb57ff1fc461",
".git/objects/2a/b9c23e2a0eb3577171d6cc9a889c50c8fa6452": "4e859a6e4876dd01792a7eaeebfa3ca9",
".git/objects/2a/e7f6952a065fdf6be5bad954224365c98f41c9": "9e9a77ce537ba4ce658cd08c2c91c599",
".git/objects/2c/773e64a31bb3fa4369500c35ad4f9b9111f438": "132244a9305fd5cf0aebd2538de8eefa",
".git/objects/30/b8d7d62483fbd401efd62fe85965261db38396": "ee9bf07372b2d949c762d615424beabf",
".git/objects/32/d89bbaab02689af239831d6e7f796e86081088": "ce36dac27ab996b9fa79447d46db93c5",
".git/objects/36/6dcc8fe238444162e54e46bbc9ebecfa53cee7": "a73eebc45ac39a6fff2b0d1c77a01088",
".git/objects/3a/83c2f087b9568780f528dbc06b0f83bb14179a": "37f8628f2b9878f5f98c4fdd6429318d",
".git/objects/3d/bd8893ab363fdbb27ee2aa2dc0bb8fe7650f8c": "a3cb797500eea3c8904012843a2d5272",
".git/objects/3e/4e463e495fe9af1628c7ba561b0249773150b1": "17bc78ef804b3f25c3110ae449b8cf73",
".git/objects/3e/8394f985bd59a429112e0ca798ce42cb811e9f": "176424c67d0312665300bb0bd0dbcede",
".git/objects/41/7a2bb460bc2e6578b25bc5e8ded41885b1af03": "9a8923e23012dfff19d3710d0a60a49c",
".git/objects/41/a901603bd2f64f8f82672190b7f55db9c1084c": "1fc55915b328d1fd06bc011803a06d0f",
".git/objects/46/1e8389c0adb2cdf3d04557455636c1b25ab7a6": "40d7dea161e1fe52169a86c85fca4b3d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0dc14f31ab8d7081d432e0a704167c943638e6": "c661359c0100041b47f70c0ac98da3a0",
".git/objects/47/66048d9a2667047c373876b14b5c27df4585d0": "8500074bdd28da9e6fa113b4abe0ce3a",
".git/objects/47/93dd257792498eabc3b0ee02930daff118b8cb": "cce71a8d9c27d550442b760fae981fd0",
".git/objects/49/b85b4a63a41999eac27282cbaf7e8e0c344db0": "2d847fe8ef43e3935d40c2a122503e0a",
".git/objects/4a/7b59a13dc27e2f0cb53a205c21ae4ae9f93102": "62ced1a5042085a496172f1c787526dc",
".git/objects/4b/b66c47ce02c5d2ef3bfc8fdb83e52e9c1da468": "8f8853f8f3a4ce4b6abffdbfc11f921b",
".git/objects/4b/f2534afcb73b6097940ad60d7d40b73b18394e": "b56fa32d70debdaa93c263d40e5e8d8b",
".git/objects/4d/017353701723adf56f17bf3b4cdb68455e1a0e": "f0bfa56b1885203a1aaaa2c70ff6fbb6",
".git/objects/50/35e51aa55ea0c8613efe896cc7d3a029c6aea6": "6b4f50fda912c30f58ec833bbbb5be0c",
".git/objects/51/71a0b274663aaf783c466a1046e468773a1d28": "78c54f968d6b10ed18edd39f424a79cd",
".git/objects/51/d6569728e04397b07ed0fd8772fb3201f34a2e": "7f24f3ea49f8538556b610e2915e9d00",
".git/objects/52/6f143319ace860d1c67dbaab41316caec6c8d8": "a9a7a8aa537fee211a99095e02a44916",
".git/objects/56/88e21eb498f4eea5e69a7c8f32d5fd3cb97e45": "06a0dc55afd1a010bf32218f49426e88",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/59/c30ef866a9227f4db1915d80916f8d8b8a4776": "fdacf185157a9a2b8f6b6bbec2a4b9bc",
".git/objects/59/c9066fec73c10204d8beacf1dbdaae147b75a9": "5c2afc5c9304dd6d22031e3b8b934f6a",
".git/objects/5d/90ac30d083b0c8630397fb3a428c871b61e795": "5d6be68e0fa1857403a3188a76107151",
".git/objects/5f/c42094536a95a129ac3bb4fb3511a473b32f1a": "31df92b42809d5f83c1f16749b25ac40",
".git/objects/61/95c3fb1892ec861b26ff0264f3f265e6a5411a": "a465a8c8718190c06228e3d6f2f8be75",
".git/objects/61/9e1e9d14259871c852ff31d08657997b2acc1f": "9b5e5314fd1da9cddc12dd9566bbffbb",
".git/objects/63/101c7432b45e9a4f96805d5df34ec284dba98b": "fa76bd5f942b0b3891720491d9eee45c",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/6e8dd2feb39951ce6db6d1f51ecdc910ca781d": "e6b8343f6884e31d97b7ccaaf528ad3a",
".git/objects/66/ec3aacde236f072c8bc8f82cefa56153a8dee5": "86ebcda1021af3694542294e2e99f6ac",
".git/objects/69/9fa0fa69ebeaaaeaa4118fe81aa0e824c664de": "11837096f73198e23ddc07de1d11df23",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/5abe0f56e0d3bf49d12b1ce2f527ac7db0bd92": "1dba21c6d411f6cb5c37f84635d02da1",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/c1d46427b6261e76b5efc965bd3c304133ed7f": "fa03ee934a54ebb793c441fdae5d1442",
".git/objects/71/44761325d6d6c400bc49699d2d43e28b68a564": "988a12df755b88ac9003c41f0531eb50",
".git/objects/73/6ce11e46ed983d8fbb34a73cabbc367fb7e3cd": "5d1a5eda75e74b8b5f6a9a067d871c4e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/ba95ca2d12cec42cb617d811e02a38f02d4f44": "d834252ffcef5f916135adb027cfd02c",
".git/objects/74/be99eec70715e602c59ec5a9126a5e0b708bf2": "323e3f102d22e0210f5552f4ea6cf47e",
".git/objects/76/75a76d29770b04178be8562ebc6abe0ca140aa": "1ded00964ddab2062dd8105b3696b7af",
".git/objects/77/b191d3ed4172de7cef459f27e8011deebb0fb1": "a0ac241b37eafb54c86fc7716f210e5e",
".git/objects/78/3836112d7efd025db1e6821da08d0631fca280": "6bbbdae500c347f013b39c79034d549a",
".git/objects/7e/91ce9910706d6d7a9b9bda6eebd967c273a2f6": "50cd39c86f27470deb1ced9a0d731c58",
".git/objects/7e/9e3534fbf6f1962b72452e223d65abe564397e": "cb6a7436ab4a41609964fd987a0508d7",
".git/objects/7e/b28b51422e05bff1b392f6dca4d0d61b33cf08": "d9d3b64b6f5a424bd5b53073df7542a6",
".git/objects/7f/86af5f69c7f473bd55da9b54bc0dfca34bbbb2": "56eb320b2a0f2bd1fbe9be83d2dbf573",
".git/objects/80/cc30314944ee7d6134786800bf0ef0bfe55d7f": "15f2305dc310133f98b036ef40e5969a",
".git/objects/83/887952983b0759dab65bfef2155ddee73a3789": "048a9f4941a4d2ca9c8c7d48653e7bc9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4d6dc6b41a9fb8e3df0f8cfa7afc2d0539c1ea": "71ba5ed260772e255f72b3b7311d68c5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c5530c041c39bb57a7746ab6234eeeee4a7a6e": "d949c55acfa001531141304aac77ef47",
".git/objects/8b/89c94d042e4fa573f63d1c2b3f037bf5dae847": "25bfdcdc34241c722dd8879433a9255c",
".git/objects/8b/b06828a4516b6acc93e486d73084dde69d57f8": "ba94bb267d94773db3e587ef9cf5e396",
".git/objects/8c/26a4fb7388145bced5832b09d330d3548e6281": "fcd4956e804773d2b787674e7d6feca1",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/b7e7739f7c394c5e647a518bd9b5e9638bcf2d": "27c5c6f871b7653cc73e68a52989e335",
".git/objects/8d/59648aefdecd96c89bc05b8bf669e0c8882f3d": "a02222cdec489f1d1ef143fbeee6d6b4",
".git/objects/8d/b1c4e749ba20bb490d193dbfccc63072f37a3e": "fbbd8014b9e46ea281473aed6898e661",
".git/objects/8e/5c172e22b3c786bfa88d2bc7a1509d9d69ea03": "1c253a938267ec14118395d5fb2e3cbc",
".git/objects/8e/9a22e5bed34614c2e2ceb85d357937fec7cf6d": "f693adb0190c6b981bbef8df4bcb573e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/f2eb4928bfb9cc1778a1aeb468edf514b1731d": "bff5ce8fd6227063785144b898eb7ea7",
".git/objects/90/3a3dc9bc92c18493129e22608add4beaf325b5": "8c278c9fafa7528771e5213000451372",
".git/objects/92/8e86c57ff92db9deede33bab1522e14766eb1f": "536d2527fdfdc09189ad67df9bfcf604",
".git/objects/93/2d405a4137a1203adb3304ea6eeec9890f634b": "6196c1586c0b71c3484e404d206d92bd",
".git/objects/93/8b2973c8c50891067b31e3479fda1a82b0e42e": "040443080988d37bc3460f490cedb4f5",
".git/objects/94/ba61e0cf44f8b10a916eb0bea1826f8ef55eaf": "f0a4f5fb90c2d8badacc0cfa50cd7e74",
".git/objects/94/d6cd8dcf77366ffd2f5bce9320abc010fb4c6d": "7573a7c189beab306b0e9d842725f69e",
".git/objects/95/222e146cd4117f863d40f0731e2904ac53799e": "0eaf5bed4ab7bca2f997959848bc7489",
".git/objects/95/8b66e10caed41daa726beb3897822cd7d2454f": "1a59d3db1fd41bfb9eea8eb86968def5",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/4fec9d159e3ae4f6d4eb09c10f11b050c02755": "808b137f8f1e45c72b2479067f9490ae",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/af01947772b7031be2d4971375b995071ad751": "335a0212628118a520209d7bbe718fa7",
".git/objects/99/4f7120ba9a37ab7cb879381d72b69f1e55c633": "7cfa32ed95489ef8261a30b8e44eeb3d",
".git/objects/99/cc9da737f3ed49966948e0d0c05426140cce95": "766ab898b692330b6b4ce6431cf86974",
".git/objects/99/ce62ad61a3489c24df485136825001a092ed5c": "0d8c9fa9ee7b12f0238f6601e1df68bb",
".git/objects/99/cf383df51ea69fce03307892fd7e7a6baa4a96": "3f4b5cf297add2c72594d4c98d4d6273",
".git/objects/9d/e9f350d02ed950cd800504f0525a3fabdb8d61": "083fe94eb81e89ab726d98e1c3c97a4f",
".git/objects/9f/1147ed1fb7cee37cff5fc41c9370a657f70c8e": "d0a551cf30f65ba7c590a74b840af10b",
".git/objects/a2/b824acc9adffc46623a3bca2ba4c3211f1d563": "c30a74439f86767e9ac2cc5fc9b8f697",
".git/objects/a5/1fd3a14ad9320404bedaa202c5e29354429ba3": "b412c37548752332e9e49a4a74993fda",
".git/objects/a7/1179b8dc3327cf8eba22bca4165c2210094227": "33e015cd8da75b2333c97f2ca5ad8c33",
".git/objects/a7/d09e88af641de8541b02d92b880213887fc26e": "fda6d6e18d318453ba27023c33d359b7",
".git/objects/a8/92d1f47900ec83e83fdb54e701636c6e236095": "57dc4c518e8ea89234f319fc65ccf2a7",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/ab/a94680753dd44e6c2cb4db6376314af47fbffc": "5421e10ed1650da70f98de64c2cc2298",
".git/objects/ab/f41945c2b641d1f1ac96f0d75df600ea8d20a7": "3819197acb92d458223c727f3b63a096",
".git/objects/ad/e477b589d215cd8579485d4ab0f706b94edde3": "dfa14e6ee0fe13dca4da17c078f5f973",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/1bb542819d111f8b12108e856ba7c52ade105a": "04fc8916f5d65e5099cdcab1c9d18f0b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/f3be11b021df5c860e576bf44a4c2674d2b797": "7bfc7e0953e9c055e021dcc72aa7cdbe",
".git/objects/b2/3cfaaa14cad7a01e0fffe2f14e448f44327c65": "0b1d4368a7d89ce684ee56b05899b990",
".git/objects/b2/bf7ca45fb1fc9f052fb96ebd01af1a94cbd988": "4cfd9a1307fa3d8c9f80567affc62aa8",
".git/objects/b4/323c5686d4bbe51a2ef93cbef4d5547a0b2c81": "c3b087b5d0edfefe5a443c0ad671138a",
".git/objects/b5/ab8d2c0bdca4edd58f4e45cc5c91a9acfce0af": "00c21a0cde243345fc78923c49cabc17",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5892fe52ee74062769717e7e0ff8ee8859896b": "49db856c01b701cfcc54868e3b8b7af7",
".git/objects/b9/cb929280fc2d22fbf83a55249c01b0a835b9c7": "55841df668c4d0a595400ffe6899b71d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/222d811405b45b75cc84c56832256e4324662f": "65ca3e1aed12385f12d6c9ce74eab2fd",
".git/objects/c2/5e823bb4c038db3c8c848ca8d79712d55a401d": "bfe23ed9bacbd84e7d68fe8c204b565f",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/4437a7a3aff491fbeac0ffc01c2b49ede593e3": "64d585cc0a1a2b598098dcf9cd4ac075",
".git/objects/c5/9a80027dcee97db2ab87ccd3f273e0e92d6288": "3abb0df2a9b2217bbc07ec58c451c584",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/8c99115e17d24e69c92650364138882a908f2a": "a0cbcf40408db60849882d0e68c2864f",
".git/objects/c8/ef536cf53df61ee10f13b3e52ee67ef9e60657": "ad072293ccc7bf53fa33ae9fb54941f9",
".git/objects/c9/e1aac4d1346beb9ba4e31dea49072e4fe4078c": "e62e5327a3fcccf6413f971a79427667",
".git/objects/ca/43118818cd2204b6d208f1848df7aa5a5edc71": "c964f67c0674b75ab68fc325e6eda12f",
".git/objects/ca/ca6af3ceed01487860cb75409b805537fead10": "6ce0ac542ea522f64740989e180d80de",
".git/objects/ce/0deb89f45f802c127ea44c1b4d5b47ffce3aaf": "d938fe9dad0cf919bcee2b4d7069593b",
".git/objects/ce/6bf3d446c432c23169a66adaac26abc0e41b44": "690fc9679178a6ac5d9ef375a57528cf",
".git/objects/d0/c302c328d6aabb7cb8bfdbc3720f1c9e50b6c0": "837d79f6d0fbd9adc249a14f9e9bb3cb",
".git/objects/d1/05ef4f1a1f54cd8b7173a52c131a98936924cb": "c613ff4900af52c84a92a9d8f6457eb9",
".git/objects/d4/131e8474558593435a7bb62ba3587afbfb34cf": "cbf1a62a329516890f9037297a0903a0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/801ff90fc2af7d1875e58a53889a1ab6f8f81e": "58d6bdc4e150440443b5d42ce07ebd5e",
".git/objects/d5/c9c6d19167dcb029b00edd8b9fc0c238d8e8a0": "3b85e389ebef23137eca77a7fb7bb7bd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4934bc1225673f4809db676f319f79c9c15bf6": "ab62e1c49d6434d574a89a82a202a757",
".git/objects/dc/6e1f814df4400f035f800b4f66383419a46312": "163f8bf3e150b57cae204aa1a5517664",
".git/objects/de/96722e605b67c0f829a3e4220795b23cfa4ab5": "9c50e0ce91c3d0ecdd046d9b5f3aed18",
".git/objects/e1/68ff6d25ac6efa1834b6b401f9606c9ca25da6": "76ad37f2983a6ba5ee718192197a829d",
".git/objects/e1/998f76b632d055454503e62ce404f106959017": "93ce7b8d5e67a09a1c0e0eb733d41aa3",
".git/objects/e6/00e57f222b0039e3d63ef8fb5296a89303544b": "3eac1194a6c1b1024bb2f50a24c0e7d8",
".git/objects/e7/2cccf3e35b84309e01818722ddce419913c158": "2fc98d5acb5bb4cb64b00e9aa4388230",
".git/objects/e8/2d213d91fa088d9d7cca5ad7a8bf81c58fa769": "418b5c2c2bffc8014dc922f8816d33b5",
".git/objects/e8/833cbc69116a5710951d85bd45449a23eb3e49": "c1f499ccc870079e5c89b0d96fe1498b",
".git/objects/e8/dda48573ec7408a6e8327b5dc7cf79b3cae0cb": "ece473913beb34ba2a851f24316526d1",
".git/objects/e9/0fa585d3ef8a8372af27be93070f03609c978c": "32a5f8b27cb005e38817cf1cf35af1d3",
".git/objects/e9/a1e7f12934f5b26ff36801f948008c4236287f": "d45997b2615a665b95bbc4b470a86cc3",
".git/objects/ea/61f97149bd5cd21afeefa06e25bcf755be701f": "9ff17e47723245bfc3c6e37c0fe3eb8e",
".git/objects/eb/28ccfd6139ea4136e236c24570b92e8df8b467": "f03ef4687e9b7b630bc5d6ed79697ef3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/87193a91a72a83712bf12d23c651f311a2ad06": "eed83d7dcbdefc06d9d3f28f253e6e1f",
".git/objects/ef/a002e4e2ee5f993eceb8992055212e1e0220de": "288c1936cda032d734aeaeaa8c1f246a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/8ed7ac9e5b03b5a2381869690169bebffda346": "ce484d99917a1fe554208174cdb780eb",
".git/objects/f9/7caebe500b410e439eeacb35ff477c8c90fa70": "0e4cddfb22aab32413a2da4db463510e",
".git/objects/f9/a2853157697bb84c1ae63aae4524ca543a56d5": "c0b8be7a99833bf7866d8d0c843068ff",
".git/objects/fb/da95bfe73628f8773219430da3af10fa17dab4": "d277902c8bde6cf47cceba5be190b57b",
".git/objects/fc/10013184f9a3ddd7cac9f4cb12ef0a7df0f848": "85169dc98c82cfa179879f21aec17541",
".git/objects/fe/4ad1ed0455b7ea44eb66514c42e67a43c90c60": "0af0cb9d0da49f8cc28e14715618e049",
".git/ORIG_HEAD": "3c97347cc59c04c5f93688528f860998",
".git/refs/heads/main": "3c97347cc59c04c5f93688528f860998",
".git/refs/remotes/origin/main": "3c97347cc59c04c5f93688528f860998",
"assets/AssetManifest.bin": "a0a7bcfc05390e7a580b56aed45f09b6",
"assets/AssetManifest.bin.json": "d6eca0779ea0b029f22d1cdacca161f5",
"assets/AssetManifest.json": "f6ed098a869bda3bbe8a7113ed280dcb",
"assets/assets/json/Chines.json": "475ab14a12d75ec1c78b6058f2d50e68",
"assets/assets/json/Hiragana.json": "aa99fca7ed0bac9dfae60fb94000fc03",
"assets/assets/json/Romaji.json": "e1e7c2b98625bceb2962002671b67563",
"assets/assets/json/teste.json": "63a9bcb5f8063825b5be5ed8b4e77159",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "67959bc967ddb2b3d2da6f116d8fcf51",
"assets/NOTICES": "1f5fadafb071ceca19b7b3f5ad901b81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "a8e18e707e65adaded2b27dc1aff909d",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d03f4332ac1bc1d28d2f2df915977479",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/main.png": "a8e18e707e65adaded2b27dc1aff909d",
"image.png": "edd5bd2ff3fb7d367eb94c7a28234b1b",
"index.html": "911564ebfbd31dbf975f4645d1990178",
"/": "911564ebfbd31dbf975f4645d1990178",
"main.dart.js": "50ac448090e938673b5784cbabc0f223",
"manifest.json": "56781a6656016ff9f66f113529ea23f2",
"README.md": "538120f6f1f5ed786ca5d3ccb4f0fd29",
"version.json": "37c1127a2e1e3497b46bc13aa974f7b1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
