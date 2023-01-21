(function(){
    var ar=['100','CHINA','wall0.png',
    '101','AMBUSH','wall1.png',
    '102','NIGHT','wall2.png',
    '103','GHOST','wall3.png',
    '104','WATER','zhi.png',
    '105','SWIMMERS','zhi1.png',
    '106','GRAVE','bai.png',
    '107','MIDNIGHT','bai1.png',
    '108','VOLCANO','huo.png',
    '109','FUEL','huo1.png',
    '110','PALACE','wang.png',
    '111','SIEGE','wang0.png',
    '112','IMPERIAL','wang1.png',
    'FB','DUNGEON','FB.png',
    'WJY','JIANG YI','WJY.png'],
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