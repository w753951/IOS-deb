/****************************
#!name = 酷我音乐
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子
#!openUrl = https://
#!homepage = https://
#!icon = https://repo.rengongzhineng.live/docs/images/kuwo.png
#!date = 2024-05-12

[Rule]
USER-AGENT,KWPlayer*,PROXY
HOST-SUFFIX,kuwo.cn,PROXY

[Script]
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/audi.tion|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic))|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://repo.rengongzhineng.live/docs/kuwo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://repo.rengongzhineng.live/docs/images/kuwo.png

[Mitm]
hostname = *.kuwo.cn
****************************/