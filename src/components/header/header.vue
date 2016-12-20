<template>
  <div class="header">
  	<div class="content-wrapper">
  		<div class="avatar">
  			<img width="64" height="64" :src="seller.avatar" alt="">
  		</div>
  		<div class="content">
  			<div class="title">
  				<span class="brand bg-image"></span>
  				<span class="name">{{ seller.name }}</span>
  			</div>
  			<div class="description">
  				{{ seller.description }}/{{seller.deliveryTime}}分钟送达
  			</div>
  			<div v-if="seller.supports" class="supports">
  				<span class="icon" :class="classMap[seller.supports[0].type]"></span>
  				<span class="text">{{seller.supports[0].description}}</span>
  			</div>
  		</div>
  		<div v-if="seller.supports" class="support-count" @click="showDetail">
  			<span class="count">{{seller.supports.length}}个优惠</span>
  			
  		</div>
  	</div>
  	<div class="bulletin-wrapper" @click="showDetail">
  		<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
  	    <i class="icon-keyboard_arrow_right"></i>
  	</div>
  	<div class="background">
  		<img :src="seller.avatar" width="100%" height="100%">
  	</div>
  	<transition name="fade">
  	<div v-show="detailShow" class="detail">
  		<div class="detail-wrapper clearfix">
  			<div class="detail-main">
				<h1 class="name">{{seller.name}}</h1>
				<div class="star-wrapper">
					<star :size="48" :score="seller.score"></star>
				</div>
				<div class="title-1">
					<div class="line">
					</div>
					<div class="text-1">
						优惠信息
					</div>
					<div class="line">
					</div>
				</div>
				<ul v-if="seller.supports" class="supports-1">
					<li class="support-item" v-for="(item,index) in seller.supports">
						<span class="icon-1" :class="classMap[seller.supports[index].type]"></span>
						<span class="text-1">
							{{ seller.supports[index].description }}
						</span>
					</li>
				</ul>
				<div class="title-1">
					<div class="line">
					</div>
					<div class="text-1">
						商家公告
					</div>
					<div class="line">
					</div>
				</div>
				<div class="bulletin-1">
					<p class="content-1">
						{{ seller.bulletin}}
					</p>
				</div>
  			</div>
  		</div>
  		<div class="detail-close" @click="hideDetail">
  			<i class="icon-close"></i>
  		</div>
  	</div>
  	</transition>
  </div>
</template>
<script>
	import star from 'components/star/star';
	export default{
		props: {
			seller: {
				type: Object
			}
		},
		data () {
	      return {
	        detailShow: false
	      };
		},
		methods: {
			showDetail () {
				this.detailShow = true;
			},
			hideDetail () {
				this.detailShow = false;
			}
		},
		created () {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		},
		components: {
			star
		}
	};
</script>

<style>
     @import "../../common/stylus/icon.styl";
	body,html{
		line-height: 1;
		font-weight: 200;
		font-family: 'PingFang SC','STHeitiSC-Light';
	}
	.header{
		color:#fff;
		overflow: hidden;
		background-color:rgba(7,17,27,0.4);
		position:relative;	
	}
	.content-wrapper{
		padding:24px 12px 18px 24px;
		font-size: 0;
		position:relative;	
	}
	.avatar{
		display:inline-block;
		vertical-align: top;
	}
	.avatar img{
		border-radius: 2px;
	}
	.content{
		display:inline-block;
		margin-left:16px;
		font-size:14px;
	}
	.title{
		margin:2px 0 8px 0;
    } 
    .brand{
    	width:30px;
    	height:18px;
    	display: inline-block;
    	background-size: 30px 18px;
    	background-repeat: no-repeat;
		vertical-align: top;
    }
    .bg-image{
    	background-image: url(brand@2x.png);
    	
    }
     @media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3) {
	 		.bg-image{
    		background-image: url(brand@3x.png);
   				}
		}
	.name{
		margin-left: 6px;
		font-size:16px;
		line-height: 18px;
		font-weight: bold;
	}
	.description{
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	.icon{
		display:inline-block;
		vertical-align: bottom;
		width:12px;
		height:12px;
		margin-right: 4px;
		background-size: 12px 12px;
		background-repeat: no-repeat;;
	}
	.decrease{
		background-image: url(decrease_1@2x.png);
	}
	.discount{
		background-image: url(discount_1@2x.png);
	}
	
	.special{
		background-image: url(special_1@2x.png);
	}
	.invoice{
		background-image: url(invoice_1@2x.png);
	}
	.guarantee{
		background-image: url(guarantee_1@2x.png);
	}
	.text{
		line-height: 12px;
		font-size:10px;
	}
	.support-count{
		position:absolute;
		right:12px;
		bottom:14px;
		padding:0 8px;
		height:24px;
		line-height: 24px;
		border-radius: 14px;
		background-color: rgba(0,0,0,0.2);
		text-align: center;
	}
	.count{
		vertical-align: top;
		font-size:10px;
	}
    .icon-keyboard_arrow_right{
    	margin-left: 2px;
    	line-height: 24px;
    	font-size:10px;
    }
    .bulletin-wrapper{
    	height: 28px;
    	line-height: 28px;
    	padding:0 22px 0 12px;
    	white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	background-color: rgba(7,17,27,0.2);
    }
    .bulletin-title{
    	margin-top: 8px;
    	display: inline-block;
    	vertical-align: top;
    	width:22px;
    	height: 12px;
    	background-image: url(bulletin@2x.png);
    	background-size: 22px 12px;
    	background-repeat: no-repeat;
    }
    .bulletin-text{
    	vertical-align: top;
    	margin:0 4px;
    	font-size: 10px;
    }
	.background{
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index: -1;
		filter: blur(10px);
	}
	.detail{
		position:fixed;
		top:0;
		left:0;
		z-index: 100;
		width: 100%;
		height:100%;
		overflow: auto;
		background-color:rgba(7,17,27,0.8);
		transition:all 0.5s;
		backdrop-filter:blur(5px);
	}
	.clearfix{
		display: inline-block;
	}
	.clearfix:after{
		display:block;
		content:".";
		height:0;
		line-height: 0;
		clear:both;
		visibility: hidden;
	}
	.detail-wrapper{
		min-height: 100%;
		width:100%;
	}
	.detail-main{
		margin-top:64px;
		padding-bottom:64px;
	}
	.detail-close{
		position:relative;
		width:32px;
		height: 32px;
		margin:-64px auto 0 auto;
		clear:both;
		font-size:12px;
	}
	.detail-main >.name{
		line-height: 16px;
		text-align: center;
		font-size:16px;
		font-weight: 700;
	}
	.star-wrapper{
		margin-top: 18px;
		padding:2px 0;
		text-align: center;
	}
	.title-1{
		display:flex;
		width:80%;
		margin:28px auto 24px auto;
	}
	.line {
		flex:1;
		position:relative;
		top:-6px;
		border-bottom:1px solid rgba(255,255,255,0.2);
	}
	.text-1{
		padding:0 12px;
		font-weight:700;
		font-size:14px;
	}
	.supports-1{
		width:80%;
		margin:0 auto;
	}
	.support-item{
		padding:0 12px;
		margin-bottom:12px;
		font-size:0;
	}
	.support-item:last-child{
		margin-bottom:0;
	}
	.icon-1{
		display: inline-block;
		width:14px;
		height:14px;
		vertical-align: top;
		margin-right:6px;
		background-size: 14px 14px;
		background-repeat: no-repeat;
	}
	.text-1{
		line-height: 14px;
		font-size:14px;
	}
	.bulletin-1{
		width:80%;
        margin:0 auto;
	}
	.bulletin-1>.content-1{
		
		padding:0 12px;
		font-size: 12px;
		line-height: 24px;
	}

	.fade-transition{
		opacity: 1;
		background:rgba(7,17,27,0.8);
	}
	.fade-enter,.fade-leave{
		opacity: 0;
		background:rgba(7,17,27,0);
	}
</style>