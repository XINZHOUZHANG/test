/*
京东赚赚
可以做随机互助
活动入口：京东赚赚小程序
长期活动，每日收益2毛左右，多号互助会较多
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
# 我的CK
10 0 * * * wskey.js, tag=我的CK, img-url=https://raw.githubusercontent.com/58xinian/icon/masterc.png, enabled=true
================Loon==============
[Script]
cron "10 0 * * *" script-path=wskey.js,tag=我的CK
===============Surge=================
我的CK = type=cron,cronexp="10 0 * * *",wake-system=1,timeout=3600,script-path=wskey.js
============小火箭=========
我的CK = type=cron,script-path=wskey.js, cronexpr="10 0 * * *", timeout=3600, enable=true
 */
const $ = new Env("更新Cookie");
const fs = require('fs');
const crypto = require('crypto');
var _0xodk='jsjiami.com.v6',_0xa490=[_0xodk,'wrgVw4XCkA==','IlzlpLfotYhbw4bljrnlma9qJg==','wrAdw4bClBHDoxk=','XsODP8K3','wqDCmTtUwqM=','w7PDmFbCqsO9','NArDjsOcw5c=','KcOOw4UZU8Kgw4fmmIrmlajlrZnmibgA','JcKTwodse0YuwogeYEwMwq3CpHfCr8K0XDvCvnnCtCELw7TDoW4je2MKCcOew5s2wq5EWCdhwpcuw6MBaDEIQMOeBHJ2w7LCvnogw7QeJsOuwoElwodxG8Kvw67Cr3tFEEbDmsOaGcOGw68Nwr8LcwjCuVoOCcO/w5DDnARWXsKIccOCwpI=','woRCW8ODKw0=','dx5PUyQkwpNW','BcOuw5PDhmQ=','QmEOwrEE','w5TCm8K0WcOY','asOlEMKndg==','w5tSJhbCgw==','HB7Dg2XDjA==','bBfDkQ==','w7hAwoMMw4k=','esKVPsO7Mg==','aBbCtMOp','w7PDunQc6K2Z5rOH5aSd6Lee77yL6K6j5qCY5pyA57+e6LaS6YWU6K+p','wovCuAhowqY=','woLDjVERw74=','6K6r5ZyFwpgaesO/wpsOwpcpwrpI5aGN5Ya/5p2H5pebwrrCp8K+woR/','A8KiwpsufA==','FQzDizoNZg==','wqt0ecOFWw==','wqsARcK5wpY=','MlzDs8OabQ==','wq3Dui0=','HRLDrcOL','wrgyXMKj6K2S5rGw5aWp6Laj77+H6K2G5qCX5p2H57yS6LWM6Ye36K2a','PkLCixA=','ecKWw7s=','QH8EwrMMGQ==','w7BSwpwaw6Q=','wq49e8K2wr0=','QxBBHzg=','wpNXTsKe','6K6t5Z+RCcKOw7JgMsKx55m45b2F5LiM55q+OcOWwrUUCQbCqOaUseS4v+S5ueWgsuWGqmvCg1TDnXQ=','VX4Xwqgx','BiPCuCHCqg==','KX3Ds8O0Xw==','wovDgsKrw6jDnA==','wqHDt2kjw4M=','csKWw5hmPg==','LkjCjg1Xw7PCjkU=','TcK9MHjCu8OvwqjCkEo3b1VKwqlSTm8yKgRF','w4VpKCjCpA==','wpZZCMKlcA==','GlrDnMKCdQ==','V8K+wozDrsO1','BVTDixnDhQ==','ahjCvsOJcio=','FT/Dog==','wpZCWsOVeA==','w73ClcK1','w60EecKBw44=','N0LCqxtS','wpzDpD/DvF4=','eALDicOow4U=','wrpjw4/CtRs=','FXXDuTrDgMOHCcOUaEEnL0XDgxjDhH9SInrDnsOpW8KXa1Qrw7TCtwoVTsOdbgDCnMKnw6YHwqJVOsOew5VSKcKlVkMwLMOoNg0=','w7bCscKsPsOzCmfDtsKTwrJ6OA==','wpMCwpTDnD/Dh0fCpRJ4wq5/MMK1wpZJKUTCkVjDqXhqD8O+wpIWw6JMBWx1YA==','JFMs','CcKyMSfDtcOhwqrCn1U1','w7F3QcKnw7tEbcK4wrUqwoXCn8Oxfks+SH5swpFkw50owpfDlsKlTlUYwrLDgsKEw4rDuMOPXMKKwr/CpcK9wosKw4JrwpnCgFU=','DHgiK8OZw6MMKAzCvcOgwq40w4I5BgZSPXXChkM2wr1Uw6jDpQ==','wqPDlFch','wpLCpDtKwp4=','wrVpSTMD','w7bCgMK7w4AnQVxmwovDq8KAw7RyJ0bCpcOS','w6gET8Kjw4I=','w4TDtHLCq8Oe','w7ZiPMKPw7o=','JQjCrBU=','wrjDvivDglI=','DmTDuWfDkMKSScKQYFQ=','wpRsQMO/SA==','JMOrw48Ffw==','wpk4O1c0Qg==','wqHCpMOST8Kw','bTVaUyQ=','wqvDkx9Cw7c=','wrTDu2RYwqF7cErDrwPCgw==','I8OHw7vDpQpgw6TDgMOdwpjCs8K1chHDlxxpwpvDhcOkZwV+eigiw6fDhcOsw5kGSn5DwqhXWsO8wrZlwrvCqMK1Jx7CiXLCgwjCgmnCjUZxBg3DoiYGw4wtPsOU','w4kcwoHDhCHDi1TCulRgwqk2IcKjwqt6GwvCmFjDsDooCsOpwpASw7xfRGJ0djnCmsKsw6bDklUUaMOfw7/CusOTQMOIYipwdjXCojoPw63CmcKSw4zDqUVmfR3CmMOTN8KJEcOXNQXDoSQbWg7CrWPCmxjCo1UOwoUdRE3DnMOZw6nDvcKjw55GwrBwCGcDY8KeNCZVBW4YOcKhw6LDrsKFwqRFacOxYw96EQEkw4MKwrbDp8KMEMKNeGBIRMOnNMK9V1LCtG5/w4rCpcORcGEaw47Dn8K4w6thSU9aZMOdw43CoBQMw7TDsMKJEVYiPMOMwoXDvyYEwq1ow4MXwrcAwo84wobCsMKAw7LCmcOKVncIfcO2a1fDn2jDr3LCsWZTExLDqCJHIzXDn8KrPMOgcVsAO8KXwqfDqMOZQsOKwoPDqsK6RcKq','b8KRwrFEKWx0w7ARAQxGw5vDvsKDwrjCoWzDnA==','EVx5KMOz','KDvDrxIl','wrVyOsKyXQ==','QQdzcTk=','w4fChcKdZsO4','w7gZe10K','awVoVyV3w5Iew5jCicKScUnDr8KAwqzDoStNw7bDqh0UXFXDhjzDuEvDiExrw4B8Ah/Cqyguw4TDpCrCrsO2wpPDrQPCtg==','OsOrw4vDumk=','wp8+w6zCsQs=','wrM9bsKKwowLw5HDi2XDqz94w5lxEMOKwr0IJEhQJ8KLw7HCog==','BVvCoiF1','w4o0VMKFw4M=','w5DDkHXCjsOB','w7MWacKawohTNMOvwr3DlA==','ThBaaQY=','wqopY8KTwog=','fcKcw71jAjJ9','e8K3wo3DicOJ','aSPClMOobg==','U8OAwrhSwrk=','wrXDncK6w6jDtcKaOA==','wrlOSAAV','wrPDssK+w7vDlQ==','csK/Aw==','fsOfNsKCZw==','cAFwTiI=','FhXDqMOvw5Y=','DcK/IDvCoQ==','OsKFdi7Csg==','woPCucOObsKQ','wpzCpsOF','NnjCnS9i','TF7DpMKww5M=','M3HDng==','wrpzFcK3UA==','fcK/C8ObCgQE5puh5paD5a+Q5ou3wpA=','wqB5w6DCtT4=','SMOeFcKiWw==','wprDoDXCrQ==','a8Kmf8KELXFEw6dXaw==','w4RSwrkmw7t+','cwVDVz8j','wqnDsDI=','wqHDgwXDvnNcwqhpJcKxw4jCmVtKVsOnJMKtbMORQMOZ','EcOOw47DhXdiw57Dl8Oow43Cn8KRTwfDsCtJwpXDosK5WBc=','WMONIsK3JSM=','I8KuMQXCig==','T8Kyw5RDDA==','NALDlBwp','wqvDg1wtw5bDvVTCg38swqDCncO3BcOhRDIkK8O7w5bCicKXwpjDtll7FU5FCifDqsKSL8OsBMKDaFY=','w5xcAQ==','DT/DsFrDsMOqw5Rkw7A6wpoe','DsOlw4MWaQ==','6K6V5Z+/IyTCs8Olwr/DmEkjL0zloZLlhqfmnL7mlb82KzIOUg==','5Ly65Li56KGy55mb55So5Lue77yJ56WE5q6g6Ly06KOp','w7Z0AALCtA==','IsKLWBDClsOKHcKfM2dpWQ==','w6LCn8K8w5RFDkxqwovDvsOPw6pk','woRPwrw=','JcKeXRXCpMOG','LH3DgMOcT8KF','cglyZB8=','FQHDr8OD','PgLDsMOKw4c=','TsODAsKmYX52wr8=','KcKuIMK5w7U=','GiLDgsONw7E=','HjvDsMONw7w=','VjLCn8OASA==','M8Kowr45YQ==','FsKzIRTCqw==','wrFUNw==','wpxKCcK6ZA==','wpFQQ8ODZA==','wrsGAF8U','RCDDqcOSw7Q=','NMK6wqcvfQ==','d8KWw7h+','KG3DksKRRg==','SxNpDjs=','wq1QWsOwaw==','OWrDmy3Dng==','wr87SHhE','wo3DuzfDrA==','woVOw6fCig3DrQ==','Zx3Dgg==','w7ocaMKT','w5FFLQTCmg==','BxzDq8OLw53CuMKCw60=','NsKWDQ==','5pqW5pWn5aWl6LWy','wpMMRGpSJMKtw7Q=','TRNpBhPCgw==','d8KPwoA=','aMKbwpfDv8OV','YsK3RcOFAw==','AxfDohMy','KwjCrw==','5Lyz5LqX6KGI55md55aQ5Lma77+A56SR5q2j6L6J6KG4','Gl7Dg8OaeQ==','HMOPw5PDuW8=','XMK7LMOpEQ==','w6xiHwDCmw==','wp3DsSPDuUtrwoA=','wqrDisKyw7jDtcKuInPDvA==','I8KZwqEpdQ==','w7o9Zkgb','wr90XQ==','FQzDiw==','wqoawo7DqSM=','wqEVw4HCgQ==','wrR0Tg==','G8KNNR7CvQ==','JsK6HRzCsA==','wr5QOsKhQw==','w6sTfUEaw4zDqQ==','E8KBVh/CucOGO8KbEg==','M8K8OcKZw50=','O2XDscOLZg==','DnDDmzjDqQ==','w61oDA==','TsKEFsO7CA==','w5NWFMKqw45ecQ==','CcK5wrEmaA==','w6sDYMKDw5E=','wpBRSDUV','w7lXwpYpw6o=','woTCpw4=','K3XDk8OaVA==','wrHDl8K8','RjsNXYJjiIaMmi.cJom.v6ChFVbgf=='];(function(_0x4b4a1b,_0x28ba5b,_0x471fee){var _0x48aeae=function(_0xf1aa84,_0x35a4b2,_0x5695ca,_0x338d58,_0x4dc409){_0x35a4b2=_0x35a4b2>>0x8,_0x4dc409='po';var _0x302944='shift',_0x2fdeb9='push';if(_0x35a4b2<_0xf1aa84){while(--_0xf1aa84){_0x338d58=_0x4b4a1b[_0x302944]();if(_0x35a4b2===_0xf1aa84){_0x35a4b2=_0x338d58;_0x5695ca=_0x4b4a1b[_0x4dc409+'p']();}else if(_0x35a4b2&&_0x5695ca['replace'](/[RNXYJIMJChFVbgf=]/g,'')===_0x35a4b2){_0x4b4a1b[_0x2fdeb9](_0x338d58);}}_0x4b4a1b[_0x2fdeb9](_0x4b4a1b[_0x302944]());}return 0xa3bc2;};return _0x48aeae(++_0x28ba5b,_0x471fee)>>_0x28ba5b^_0x471fee;}(_0xa490,0x7d,0x7d00));var _0x56fb=function(_0x303898,_0x1a633a){_0x303898=~~'0x'['concat'](_0x303898);var _0x5f4509=_0xa490[_0x303898];if(_0x56fb['yJoxdl']===undefined){(function(){var _0x3ad56b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4d8d83='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3ad56b['atob']||(_0x3ad56b['atob']=function(_0x411fe3){var _0x337d7a=String(_0x411fe3)['replace'](/=+$/,'');for(var _0x2cccdc=0x0,_0x1bcdd1,_0x36e7be,_0x473d9b=0x0,_0x599134='';_0x36e7be=_0x337d7a['charAt'](_0x473d9b++);~_0x36e7be&&(_0x1bcdd1=_0x2cccdc%0x4?_0x1bcdd1*0x40+_0x36e7be:_0x36e7be,_0x2cccdc++%0x4)?_0x599134+=String['fromCharCode'](0xff&_0x1bcdd1>>(-0x2*_0x2cccdc&0x6)):0x0){_0x36e7be=_0x4d8d83['indexOf'](_0x36e7be);}return _0x599134;});}());var _0x5f8745=function(_0x20092e,_0x1a633a){var _0x44467d=[],_0x2a2c1c=0x0,_0x23c326,_0x433850='',_0x4496ac='';_0x20092e=atob(_0x20092e);for(var _0x2c7e07=0x0,_0x46c068=_0x20092e['length'];_0x2c7e07<_0x46c068;_0x2c7e07++){_0x4496ac+='%'+('00'+_0x20092e['charCodeAt'](_0x2c7e07)['toString'](0x10))['slice'](-0x2);}_0x20092e=decodeURIComponent(_0x4496ac);for(var _0x47aec5=0x0;_0x47aec5<0x100;_0x47aec5++){_0x44467d[_0x47aec5]=_0x47aec5;}for(_0x47aec5=0x0;_0x47aec5<0x100;_0x47aec5++){_0x2a2c1c=(_0x2a2c1c+_0x44467d[_0x47aec5]+_0x1a633a['charCodeAt'](_0x47aec5%_0x1a633a['length']))%0x100;_0x23c326=_0x44467d[_0x47aec5];_0x44467d[_0x47aec5]=_0x44467d[_0x2a2c1c];_0x44467d[_0x2a2c1c]=_0x23c326;}_0x47aec5=0x0;_0x2a2c1c=0x0;for(var _0x28542c=0x0;_0x28542c<_0x20092e['length'];_0x28542c++){_0x47aec5=(_0x47aec5+0x1)%0x100;_0x2a2c1c=(_0x2a2c1c+_0x44467d[_0x47aec5])%0x100;_0x23c326=_0x44467d[_0x47aec5];_0x44467d[_0x47aec5]=_0x44467d[_0x2a2c1c];_0x44467d[_0x2a2c1c]=_0x23c326;_0x433850+=String['fromCharCode'](_0x20092e['charCodeAt'](_0x28542c)^_0x44467d[(_0x44467d[_0x47aec5]+_0x44467d[_0x2a2c1c])%0x100]);}return _0x433850;};_0x56fb['MSnaEL']=_0x5f8745;_0x56fb['HiVMdz']={};_0x56fb['yJoxdl']=!![];}var _0x4fd1ad=_0x56fb['HiVMdz'][_0x303898];if(_0x4fd1ad===undefined){if(_0x56fb['oLInEJ']===undefined){_0x56fb['oLInEJ']=!![];}_0x5f4509=_0x56fb['MSnaEL'](_0x5f4509,_0x1a633a);_0x56fb['HiVMdz'][_0x303898]=_0x5f4509;}else{_0x5f4509=_0x4fd1ad;}return _0x5f4509;};!(async()=>{var _0xd45d8b={'XhjYu':_0x56fb('0','6Dbm'),'sWJXi':function(_0x3e053f){return _0x3e053f();},'ztNlM':'GOKkJ','RJdcE':function(_0x4e2e61,_0x207140){return _0x4e2e61===_0x207140;},'KmPhJ':_0x56fb('1','sQ1m'),'BkHYr':_0x56fb('2','3*#^'),'gBtum':'/jd/config/config.sh','rEoft':_0x56fb('3','WPhx'),'Mbdzp':_0x56fb('4','RnCD'),'SGiYx':_0x56fb('5','aC(w'),'CJrss':_0x56fb('6','gYVj'),'Mqpdt':function(_0x578ed7,_0x43faec){return _0x578ed7+_0x43faec;},'qxnCI':_0x56fb('7','32a$'),'YSRWC':_0x56fb('8','WPhx'),'mTOYP':_0x56fb('9','K44P'),'bjEoU':_0x56fb('a','3*#^'),'iQBcB':_0x56fb('b','o1Q)'),'mHpcO':_0x56fb('c','l)5)'),'PEFLH':function(_0x284916,_0x30d120){return _0x284916!=_0x30d120;},'iESxA':function(_0x56c81a,_0x323816){return _0x56c81a!==_0x323816;},'AqYzU':function(_0x206be8,_0x531527){return _0x206be8<_0x531527;},'ORLSE':_0x56fb('d','W6Fc'),'VMWDz':'UwQof','EoocA':function(_0x2bb3df,_0x29ca2a){return _0x2bb3df(_0x29ca2a);},'KsrVv':_0x56fb('e','#dns'),'DkVgm':function(_0x5091ad){return _0x5091ad();},'XXgwx':function(_0x49058b,_0x2d380f,_0x106054){return _0x49058b(_0x2d380f,_0x106054);},'PBFcW':function(_0x4c9db4,_0x2bdba8){return _0x4c9db4(_0x2bdba8);},'yZaIe':_0x56fb('f','T)13'),'DmIKh':_0x56fb('10',')Zp('),'sqVrZ':_0x56fb('11','YEui'),'PTrKk':_0x56fb('12','o1Q)'),'drUDF':_0x56fb('13','gb*@')};$[_0x56fb('14','wnIx')]=[];const _0x2904d2=fs[_0x56fb('15','BsyT')](_0x56fb('16','wU]S'));const _0x3e542c=crypto['createHash'](_0x56fb('17','sQ1m'));_0x3e542c[_0x56fb('18','BsyT')](_0x2904d2);const _0x57e71c=_0x3e542c[_0x56fb('19','Sjor')](_0xd45d8b[_0x56fb('1a','gYVj')]);const _0x2cbe84=_0xd45d8b['YSRWC'];const _0x172d50=_0xd45d8b['mTOYP'];const _0x393e19=Buffer[_0x56fb('1b','G8[Q')](_0xd45d8b[_0x56fb('1c','G8[Q')](_0x2cbe84,_0x172d50),_0xd45d8b['bjEoU']);const _0x294364=_0x393e19[_0x56fb('1d','3*#^')]();await _0xd45d8b[_0x56fb('1e','Zgu%')](wskeyArr);if(_0x57e71c===_0x294364){if(_0xd45d8b[_0x56fb('1f','G8[Q')]!==_0xd45d8b[_0x56fb('20','G8[Q')]){if($['wskey']&&_0xd45d8b[_0x56fb('21','gb*@')]($[_0x56fb('22','Thvk')],null)){if(_0xd45d8b['iESxA'](_0x56fb('23','o1Q)'),'tduCs')){console[_0x56fb('24','zVk]')](err);}else{for(let _0x7d4069=0x0;_0xd45d8b[_0x56fb('25','zVk]')](_0x7d4069,$[_0x56fb('26','*xKK')]['length']);_0x7d4069++){if(_0xd45d8b[_0x56fb('27','S6(Z')](_0xd45d8b[_0x56fb('28','0)AE')],_0xd45d8b['VMWDz'])){data=JSON[_0x56fb('29','Thvk')](data);$[_0x56fb('2a','l)5)')]=data;}else{index=_0x7d4069+0x1;wskey=$[_0x56fb('2b','U*TB')];if(wskey){$['ck']='';$['body']='';$['UUID']=_0xd45d8b[_0x56fb('2c','q1c8')](getUUID,_0xd45d8b[_0x56fb('2d','*xKK')]);await _0xd45d8b[_0x56fb('2e','ECWz')](getSign);$['body']=$[_0x56fb('2a','l)5)')][_0xd45d8b[_0x56fb('2f','jIv(')](random,0x0,$[_0x56fb('30','WPhx')][_0x56fb('31','sQ1m')])];console[_0x56fb('32','0)AE')](''+$[_0x56fb('33','*BP&')]);TokenkeyRes=await _0xd45d8b[_0x56fb('34','wnIx')](getTokenKey,wskey[_0x7d4069]);if(!TokenkeyRes[_0x56fb('35','G8[Q')]){console[_0x56fb('36','Zgu%')]('ck'+wskey[_0x7d4069]+_0x56fb('37','o1Q)'));continue;}await tokenKey2ptkey(TokenkeyRes[_0x56fb('38','jIv(')]);if($['ck']){replacement=_0x56fb('39','q1c8')+index+'=\x22'+$['ck']+'\x22';orgin=new RegExp('Cookie'+index+_0x56fb('3a','YEui'),'g');await fs['readFile'](_0xd45d8b[_0x56fb('3b','veWt')],_0xd45d8b['rEoft'],async(_0x33a269,_0x7ebfca)=>{var _0x256480={'metgV':function(_0x3afc4b){return _0xd45d8b['sWJXi'](_0x3afc4b);}};if(_0xd45d8b[_0x56fb('3c','RnCD')]!==_0xd45d8b[_0x56fb('3d','W6Fc')]){console[_0x56fb('3e','goOb')](_0x56fb('3f','veWt'));}else{if(_0x33a269){if(_0xd45d8b[_0x56fb('40','Sjor')](_0xd45d8b[_0x56fb('41','K44P')],_0xd45d8b[_0x56fb('42','6Dbm')])){_0x256480[_0x56fb('43','wnIx')](resolve);}else{console['log'](_0x33a269);}}else{var _0x324bb2=_0x7ebfca[_0x56fb('44','WPhx')](orgin,replacement);await fs[_0x56fb('45','y5CM')](_0xd45d8b[_0x56fb('46','Thvk')],_0x324bb2,_0xd45d8b[_0x56fb('47','4QR5')],_0x33a269=>{if(_0x33a269){console[_0x56fb('48','l3MS')](_0x33a269);}else{console[_0x56fb('49','W6Fc')](_0xd45d8b[_0x56fb('4a','wg]@')]);}});}}});}$[_0x56fb('4b','ObpJ')](0x7d0);$[_0x56fb('4c','l3MS')]=require(_0xd45d8b[_0x56fb('4d','o1Q)')]),$['cktough']=require(_0xd45d8b[_0x56fb('4e','o1Q)')]),$[_0x56fb('4f','zVk]')]=new $[(_0x56fb('50','4QR5'))][(_0x56fb('51','BsyT'))]();}}}}}else{if(_0xd45d8b[_0x56fb('52','Zgu%')](_0xd45d8b[_0x56fb('53','Sjor')],_0xd45d8b[_0x56fb('54','ECWz')])){resolve();}else{console[_0x56fb('55','wnIx')](_0xd45d8b[_0x56fb('56','6Dbm')]);}}}else{for(const _0x29c2d2 of resp[_0x56fb('57','T)13')][_0xd45d8b[_0x56fb('58','Thvk')]]){if(_0x29c2d2['split']('=')[0x0]===_0xd45d8b['SGiYx']||_0x29c2d2[_0x56fb('59','*BP&')]('=')[0x0]===_0xd45d8b[_0x56fb('5a','l3MS')]){$['ck']+=_0xd45d8b[_0x56fb('5b','aC(w')](_0x29c2d2['split'](';')[0x0],';');}}}}else{console[_0x56fb('5c','4]9B')](_0xd45d8b['drUDF']);}})()[_0x56fb('5d','Sjor')](_0x297b00=>{$[_0x56fb('5e','y5CM')]('','❌\x20'+$[_0x56fb('5f','ObpJ')]+_0x56fb('60','q1c8')+_0x297b00+'!','');})[_0x56fb('61','ObpJ')](()=>{$[_0x56fb('62','3*#^')]();});function getSign(){var _0x51f24={'EzRjp':_0x56fb('63','4]9B'),'RLPWA':function(_0x11072d,_0x78af87){return _0x11072d!==_0x78af87;},'qWtgc':_0x56fb('64','uSE3'),'rjUra':_0x56fb('65','G8[Q'),'PIAue':_0x56fb('66','YEui'),'urCJH':function(_0x416495,_0x2be799){return _0x416495!==_0x2be799;},'eNFXT':'MrCay'};const _0x340bf1=Buffer['from'](_0x56fb('67','Thvk'),_0x56fb('68','*xKK'));const _0x3e6785=_0x340bf1[_0x56fb('69','gYVj')]();return new Promise(_0xf09622=>{var _0x4206b2={'dEZKQ':_0x51f24['EzRjp'],'Rwdve':function(_0x117132,_0x2518a5){return _0x51f24[_0x56fb('6a','K44P')](_0x117132,_0x2518a5);},'cpaZn':_0x51f24['qWtgc'],'JhrqA':_0x51f24[_0x56fb('6b','VwME')],'MWQcF':_0x56fb('6c','80uJ'),'zHTcQ':function(_0x28ddcb,_0x3f0fdc){return _0x28ddcb(_0x3f0fdc);},'sghsu':_0x51f24[_0x56fb('6d','3*#^')]};if(_0x51f24['urCJH'](_0x56fb('6e','wnIx'),_0x51f24[_0x56fb('6f',')Zp(')])){$[_0x56fb('70','0)AE')]({'url':_0x3e6785,'timeout':0x2710},(_0x1fd983,_0x103cf4,_0x1ca4e5)=>{try{if(_0x56fb('71','aC(w')===_0x4206b2[_0x56fb('72','6Dbm')]){$['done']();}else{if(_0x1fd983){console['log'](_0x1fd983);console['log']($[_0x56fb('73','gb*@')]+_0x56fb('74','#dns'));}else{if(_0x4206b2['Rwdve'](_0x4206b2[_0x56fb('75','4]9B')],_0x56fb('76','#dns'))){if(_0x1ca4e5){_0x1ca4e5=JSON['parse'](_0x1ca4e5);$[_0x56fb('33','*BP&')]=_0x1ca4e5;}}else{console['log'](_0x56fb('77','Ifpp'));}}}}catch(_0x2ad3ab){if(_0x56fb('78','Thvk')===_0x4206b2['JhrqA']){$[_0x56fb('79','W6Fc')](_0x2ad3ab,_0x103cf4);}else{_0x1ca4e5=JSON['parse'](_0x1ca4e5);$['wskey']=_0x1ca4e5;}}finally{if(_0x4206b2[_0x56fb('7a','*xKK')]!==_0x56fb('7b','O(nG')){_0x4206b2[_0x56fb('7c','Sjor')](_0xf09622,_0x1ca4e5);}else{if(_0x1fd983){console[_0x56fb('7d','32a$')](_0x1fd983);console['log']($[_0x56fb('7e','G8[Q')]+_0x56fb('7f','*BP&'));}else{if(_0x1ca4e5){_0x1ca4e5=JSON['parse'](_0x1ca4e5);$[_0x56fb('80','Ifpp')]=_0x1ca4e5;}}}}});}else{if(err){console[_0x56fb('24','zVk]')](err);}else{console[_0x56fb('81','l)5)')](_0x4206b2['sghsu']);}}});}function wskeyArr(){var _0x46e25e={'koDrC':function(_0x20ab8c,_0x31d481){return _0x20ab8c===_0x31d481;},'UxmXO':_0x56fb('82','VwME'),'SHFXb':function(_0x6a5dfe,_0x5bb89b){return _0x6a5dfe+_0x5bb89b;},'sHEcX':function(_0x41323c,_0x180b0d){return _0x41323c(_0x180b0d);},'VzpdL':function(_0x5b0980,_0x5536e5){return _0x5b0980!==_0x5536e5;},'aqoDp':'xJLOc','euLkT':_0x56fb('83','aC(w'),'ADpMD':_0x56fb('84','O(nG'),'aiTMc':'RoRDp','goDaY':_0x56fb('85','q1c8'),'FAAQt':_0x56fb('86','*xKK')};return new Promise(_0x3f6afb=>{var _0x51d015={'uwukk':_0x56fb('87','Zgu%'),'DnCOi':function(_0x45949c,_0x46c8ce){return _0x46e25e['sHEcX'](_0x45949c,_0x46c8ce);},'KbXeA':function(_0x2e4b7b,_0x54b600){return _0x46e25e['VzpdL'](_0x2e4b7b,_0x54b600);},'EDevJ':_0x46e25e['aqoDp'],'UyaFb':_0x46e25e[_0x56fb('88','VwME')],'RiUal':_0x46e25e[_0x56fb('89','goOb')],'xUFSv':function(_0x2dbda1,_0x505086){return _0x46e25e['koDrC'](_0x2dbda1,_0x505086);},'sZmWn':_0x46e25e[_0x56fb('8a','Sjor')]};if(_0x46e25e[_0x56fb('8b','y5CM')](_0x56fb('8c','#dns'),_0x46e25e[_0x56fb('8d','l)5)')])){fs[_0x56fb('8e','Ifpp')](_0x56fb('8f','o1Q)'),_0x46e25e['FAAQt'],(_0x3c3683,_0x50d6b0)=>{var _0x32a65b={'XgodM':function(_0xc63f8a,_0x210853){return _0x51d015[_0x56fb('90','wnIx')](_0xc63f8a,_0x210853);}};try{if(_0x3c3683){if(_0x51d015[_0x56fb('91','zVk]')](_0x51d015[_0x56fb('92','U*TB')],'CEmye')){console[_0x56fb('7d','32a$')](_0x3c3683);}else{_0x32a65b[_0x56fb('93','veWt')](_0x3f6afb,_0x50d6b0);}}else{if(_0x51d015['UyaFb']!==_0x51d015['RiUal']){if(_0x50d6b0){_0x50d6b0=JSON['parse'](_0x50d6b0);$['wskey']=_0x50d6b0;}else{if(_0x51d015[_0x56fb('94','ECWz')]('dtvJf','dnPNG')){$[_0x56fb('95','gb*@')](e,resp);}else{console[_0x56fb('96',')Zp(')](_0x51d015['uwukk']);}}}else{console['log'](_0x3c3683);}}}catch(_0x2ed0a1){if(_0x51d015['sZmWn']==='RoRDp'){$['logErr'](_0x2ed0a1);}else{if(_0x50d6b0){_0x50d6b0=JSON[_0x56fb('97','*xKK')](_0x50d6b0);$['wskey']=_0x50d6b0;}else{console[_0x56fb('98','wU]S')](_0x51d015[_0x56fb('99','*BP&')]);}}}finally{_0x3f6afb();}});}else{if(_0x46e25e[_0x56fb('9a','Ifpp')](vo[_0x56fb('9b','WPhx')]('=')[0x0],'pt_key')||vo[_0x56fb('9c','0)AE')]('=')[0x0]===_0x46e25e['UxmXO']){$['ck']+=_0x46e25e[_0x56fb('9d','sQ1m')](vo['split'](';')[0x0],';');}}});}function getTokenKey(_0x562aae){var _0x332414={'zlRxV':_0x56fb('9e','ECWz'),'GAzko':_0x56fb('9f','80uJ'),'frsue':_0x56fb('a0','wg]@'),'ZAHLj':_0x56fb('a1','q1c8'),'pwCIg':_0x56fb('a2','o1Q)'),'cGspl':_0x56fb('a3','T)13'),'MQIAQ':_0x56fb('a4','2Fzb')};return new Promise(_0x2761dd=>{$[_0x56fb('a5','#dns')]({'url':_0x332414[_0x56fb('a6','4]9B')],'headers':{'Host':_0x332414['GAzko'],'Content-Type':_0x332414[_0x56fb('a7','l3MS')],'Accept':_0x332414['ZAHLj'],'Accept-Encoding':_0x56fb('a8','wU]S'),'Connection':_0x332414[_0x56fb('a9','*BP&')],'Cookie':_0x562aae,'User-Agent':_0x332414[_0x56fb('aa','uSE3')],'Accept-Language':_0x332414[_0x56fb('ab','T)13')]},'body':$[_0x56fb('ac','goOb')]},async(_0x13a3e2,_0x19f561,_0x337436)=>{try{if(_0x13a3e2){console['log'](_0x13a3e2);}if(_0x337436){_0x337436=JSON['parse'](_0x337436);}else{console[_0x56fb('98','wU]S')]('无法成功获取到tokenKey');}}catch(_0x1cc374){console['log'](_0x1cc374);}finally{_0x2761dd(_0x337436);}});});}function tokenKey2ptkey(_0x208ab6){var _0x3940e1={'jUrFs':function(_0x1bc2fb,_0x19316e){return _0x1bc2fb!==_0x19316e;},'MaFNP':_0x56fb('ad','WPhx'),'tnnCq':'headers','oTMdn':_0x56fb('ae','ECWz'),'deQfU':'omAJJ','CIcfT':_0x56fb('af','*xKK'),'OHsEs':_0x56fb('b0','YEui'),'rWzFq':_0x56fb('b1','S6(Z'),'DsgPt':function(_0x4bbeef,_0xee6dfb){return _0x4bbeef===_0xee6dfb;},'efhAe':'pt_pin','ohtly':function(_0xf46f8,_0x5ffe32){return _0xf46f8===_0x5ffe32;},'gmDtI':_0x56fb('b2','CyH('),'jkOZb':'nrnSM','gLvKK':function(_0x58d465,_0x119bbb){return _0x58d465+_0x119bbb;},'DHeTD':_0x56fb('b3','gYVj'),'RctNS':function(_0x18a9d8){return _0x18a9d8();},'QXCmZ':'无法成功获取到tokenKey','hIjrl':'cookie\x20更新完成!','BvoVo':_0x56fb('b4','32a$'),'PDXvf':'YmhFK','mIHkL':_0x56fb('b5','32a$'),'IJDDv':_0x56fb('b6','K44P'),'YvMHd':_0x56fb('b7','wg]@'),'RGXof':_0x56fb('b8','l)5)'),'wctUs':'gzip,\x20deflate,\x20br'};return new Promise(_0x1435ae=>{var _0x188873={'yQZca':function(_0x266874,_0x35c43e){return _0x3940e1[_0x56fb('b9','2Fzb')](_0x266874,_0x35c43e);},'hGtxz':_0x3940e1[_0x56fb('ba','W6Fc')],'gHEwa':_0x3940e1[_0x56fb('bb','zVk]')]};if(_0x3940e1['ohtly'](_0x3940e1[_0x56fb('bc','gYVj')],_0x3940e1[_0x56fb('bd','80uJ')])){data=JSON[_0x56fb('be','4QR5')](data);}else{$[_0x56fb('70','0)AE')]({'url':_0x56fb('bf','gYVj')+_0x208ab6,'headers':{'Host':_0x3940e1[_0x56fb('c0','K44P')],'Accept':_0x3940e1[_0x56fb('c1','ObpJ')],'User-Agent':_0x56fb('c2','O(nG')+$['UUID']+_0x3940e1[_0x56fb('c3','Ifpp')],'Accept-Language':_0x3940e1[_0x56fb('c4','*BP&')],'Accept-Encoding':_0x3940e1[_0x56fb('c5','uSE3')],'Connection':_0x56fb('c6','*BP&')}},async(_0x2ea0fa,_0x42f3e5,_0x53d1ba)=>{try{if(_0x3940e1['jUrFs'](_0x3940e1['MaFNP'],_0x3940e1[_0x56fb('c7','gYVj')])){$['ck']+=_0x188873['yQZca'](vo[_0x56fb('c8','O(nG')](';')[0x0],';');}else{if(_0x42f3e5&&_0x42f3e5[_0x56fb('c9','l)5)')]&&_0x42f3e5[_0x3940e1[_0x56fb('ca','veWt')]][_0x3940e1[_0x56fb('cb','gb*@')]]){if(_0x3940e1[_0x56fb('cc','Cg3K')]!==_0x3940e1['CIcfT']){for(const _0x3dcc63 of _0x42f3e5[_0x56fb('cd','y5CM')][_0x3940e1['oTMdn']]){if(_0x3940e1[_0x56fb('ce','l3MS')](_0x56fb('cf','y5CM'),_0x3940e1['OHsEs'])){console[_0x56fb('d0','6Dbm')](_0x2ea0fa);}else{if(_0x3dcc63['split']('=')[0x0]===_0x3940e1['rWzFq']||_0x3940e1[_0x56fb('d1','3*#^')](_0x3dcc63[_0x56fb('d2','gYVj')]('=')[0x0],_0x3940e1[_0x56fb('d3','G8[Q')])){if(_0x3940e1[_0x56fb('d4','o1Q)')](_0x3940e1['gmDtI'],_0x3940e1[_0x56fb('d5','BsyT')])){console['log'](error);}else{$['ck']+=_0x3940e1['gLvKK'](_0x3dcc63[_0x56fb('d6','CyH(')](';')[0x0],';');}}}}}else{console[_0x56fb('d7','CyH(')](_0x188873['hGtxz']);}}console[_0x56fb('5c','4]9B')]($['ck']);}}catch(_0x5a8c33){console[_0x56fb('48','l3MS')](_0x5a8c33);}finally{if(_0x3940e1[_0x56fb('d8','Ifpp')]('nDFtr',_0x3940e1[_0x56fb('d9','2peo')])){console[_0x56fb('da','U*TB')](_0x188873[_0x56fb('db','zVk]')]);}else{_0x3940e1['RctNS'](_0x1435ae);}}});}});};_0xodk='jsjiami.com.v6';

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getUUID(format = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', UpperCase = 0) {
    return format.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        if (UpperCase) {
            uuid = v.toString(36).toUpperCase();
        } else {
            uuid = v.toString(36)
        }
        return uuid;
    });
}


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
