(function(){
    var ar=['NutBowling','NUTBOWL ','baolingqiu.png',
    'GuanXin','STARGAZE','GuanXin.png',
    'yy','TIT-TAT','yy.png',
    'ZombieGames','FOOTBALL','woxinfeixiang.png',
    'yicixingxiaofei','ITEMS','yicixingxiaofei.gif',
    'kaotianchifan','SUNLIGHT','kaotianchifan.png',
    'pinjizhidi','FFA','pinjizhidi.png',
    'bpsyc','FOOD','bpsyc.png',
    'fmdzz','NIGHT','fmdzz.png',
    'ydbs','FLOWERS','ten.png',
    'KongXi','FLYERS','KongXi.png',
    'YXZZ','STEALTH','YXZZ.png',
    'xjsdmf','TROUBLE','sm.png',
    'QRWX','24/7','QRWX.png',
    '150','EVERGREEN ','mota.png'],
    v,i=0,n,l=ar.length,s='';
    for(n=0;n<l;n+=3){
        i%5==0&&(s+='<tr>');
        s+='<td height="139" valign="top" onclick="SelectModal(\''+ar[n]+'\')"><div><img src="images/interface/'+ar[n+2]+'"></div><div class="list">'+ar[n+1]+'</div></td>';
        (i+1)%5==0?(
            s+='</tr>',
            i=0
        ):++i;
    }
    if(i!=0){
        while(--i)s+='<td>　</td>';
        s+='</tr>';
    }
    document.write(s)
})()