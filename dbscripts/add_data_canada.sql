CREATE VIEW add_data_canada AS
SELECT 
	cdc1.date,
    cdc1.numconf - cdc2.numconf AS conf_add,
    cdc1.numexist - cdc2.numexist AS exist_add,
    IFNULL(cdc1.numdeaths, 0) - IFNULL(cdc2.numdeaths, 0) AS deaths_add,
    IFNULL(cdc1.numrecover, 0) - IFNULL(cdc2.numrecover, 0) AS recover_add
FROM core_data_canada cdc1
JOIN core_data_canada cdc2
ON cdc1.date > cdc2.date
GROUP BY cdc2.date