-- lists the num ofrecords with the same score in second_table --
SELECT `score`, COUNT(*) AS `number`
FREOM `second_table`
GROUP BY `score`
ORDER BY `number` DESC;