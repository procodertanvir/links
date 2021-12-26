let time = new Date().getHours();

if(time >= 5 && time <= 11.59){
   document.getElementById('timeStatus').innerHTML = ('আপনার দিনটি সুন্দর হোক');
}

else if(time >= 12 && time <= 13.59){
   document.getElementById('timeStatus').innerHTML = ('আপনার দুপুরটি সুন্দর হোক');
}

else if(time >= 14 && time <= 17.29){
   document.getElementById('timeStatus').innerHTML = ('আপনার বিকালটি সুন্দর হোক');
}

else if(time >= 17.30 && time <= 20.59){
   document.getElementById('timeStatus').innerHTML = ('আপনার সন্ধ্যাটি সুন্দর হোক');
}
else{
   document.getElementById('timeStatus').innerHTML = ('আপনার রাতটি সুন্দর হোক');
}