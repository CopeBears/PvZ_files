var ArLvl={1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10'},
LvlList=function(BLvl,SLvl1,SLvl2){
	var s='',startlvl=BLvl*10;
	do{
		s+='<span class="lvl" onclick="StartAdventure('+(startlvl+SLvl1)+')">'+ArLvl[SLvl1]+'</span>';
	}while(SLvl1++<SLvl2)
	document.write(s);
};