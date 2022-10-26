
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class IncreaseMinionsAge_08 {

    private static final String UPDATED_MINIONS_AGE = "update minions set age = age + 1, name = lower(name) where id = ?";
    private static final String GET_ALL_MINIONS_NAME_AND_AGE = "select name, age from minions";

    private static final String PRINT_FORMAT = "%s %d%n";


    public static void main(String[] args) throws SQLException {
        Scanner scanner = new Scanner(System.in);

        final List<Integer> inputIDs = Arrays.stream(scanner.nextLine().split("\\s+")).map(Integer::parseInt).toList();

        final Connection connection = Utils.getSQLConnection();


        for (int i = 0; i < inputIDs.size(); i++) {
            final PreparedStatement getMinionStatement = connection.prepareStatement(UPDATED_MINIONS_AGE);
            getMinionStatement.setInt(1, inputIDs.get(i));
            getMinionStatement.executeUpdate();

        }

        final PreparedStatement getAllMinions = connection.prepareStatement(GET_ALL_MINIONS_NAME_AND_AGE);
        final ResultSet allMinionsResultSet = getAllMinions.executeQuery();

        while (allMinionsResultSet.next()) {

            final String minionName = allMinionsResultSet.getString(Constant.COLUMN_NAME);
            final int minionAge = allMinionsResultSet.getInt(Constant.COLUMN_AGE);

            System.out.printf(PRINT_FORMAT, minionName, minionAge);

        }

        connection.close();


    }


}

