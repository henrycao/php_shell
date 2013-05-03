<?php
$req = $_REQUEST['req'];

if ($req === 'Add1Day') {
exec("sudo /bin/sh ./scripts/change_date.sh add_1_day");
}
if ($req === 'Add7Day') {
exec("sudo /bin/sh ./scripts/change_date.sh add_7_days");
}
if ($req === 'Add14Day') {
exec("sudo /bin/sh ./scripts/change_date.sh add_14_days");
}
if ($req === 'Add30Day') {
exec("sudo /bin/sh ./scripts/change_date.sh add_30_days");
}
if ($req === 'Reduce1Day') {
exec("sudo /bin/sh ./scripts/change_date.sh reduce_1_day");
}
if ($req === 'Reduce7Day') {
exec("sudo /bin/sh ./scripts/change_date.sh reduce_7_days");
}
if ($req === 'Reduce14Day') {
exec("sudo /bin/sh ./scripts/change_date.sh reduce_14_days");
}
if ($req === 'Reduce30Day') {
exec("sudo /bin/sh ./scripts/change_date.sh reduce_30_days");
}
if ($req === 'ResetRealTime') {
exec("sudo /bin/sh ./scripts/change_date.sh reset_real_time");
}

$nowtime=date('Y-m-d H:i:s');
echo $nowtime;
