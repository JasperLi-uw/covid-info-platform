CREATE VIEW top_three_prov_data AS
SELECT cdp1.prname, date, numconf
FROM core_data_provinces AS cdp1
JOIN
	(SELECT prname
     FROM core_data_provinces
     WHERE date = '2021-01-07'
     ORDER BY numconf DESC LIMIT 3) as cdp2
ON cdp1.prname = cdp2.prname
