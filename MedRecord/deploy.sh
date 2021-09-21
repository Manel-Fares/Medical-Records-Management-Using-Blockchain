#!/bin/bash

composer archive create -t dir -n .

composer network install --card PeerAdmin@hlfv1 --archiveFile medrecord@0.0.1.bna

composer network start --networkName medrecord --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

composer card import --file networkadmin.card

composer-rest-server -c admin@medrecord -n never -u true -w true


