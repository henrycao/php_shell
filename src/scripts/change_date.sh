#!/bin/sh
ITIME=`date +%s`
usage(){
	echo "sh change_time.sh add_1_day|add_7_days|add_14_days|add_30_days|reduce_1_day|reduce_7_days|reduce_14_days|reduce_30_days|reset_real_time"
}

case $1 in
	add_1_day)
		IDATE=$(($ITIME+86400))
		date -s "1970-01-01 UTC $IDATE seconds"	
		;;
	add_7_days)
		IDATE=$(($ITIME+604800))
		date -s "1970-01-01 UTC $IDATE seconds"	
                ;;
	add_14_days)
		IDATE=$(($ITIME+1209600))
		date -s "1970-01-01 UTC $IDATE seconds"	
                ;;
	add_30_days)
		IDATE=$(($ITIME+2592000))
		date -s "1970-01-01 UTC $IDATE seconds"	
                ;;
	reduce_1_day)
		IDATE=$(($ITIME-86400))
		date -s "1970-01-01 UTC $IDATE seconds"	
                ;;
	reduce_7_days)
		IDATE=$(($ITIME-604800))
		date -s "1970-01-01 UTC $IDATE seconds"	
                ;;
	reduce_14_days)
		IDATE=$(($ITIME-1209600))
		date -s "1970-01-01 UTC $IDATE seconds"	
                ;;
	reduce_30_days)
		IDATE=$(($ITIME-2592000))
		date -s "1970-01-01 UTC $IDATE seconds"	
                ;;
	reset_real_time)
#		ntpdate 10.88.230.118
		REALUNIXTIME=`/usr/bin/ssh 10.88.230.216 'date +%s'`
		date -s "1970-01-01 UTC $REALUNIXTIME seconds"
                ;;
	*)
		usage
                ;;
esac
