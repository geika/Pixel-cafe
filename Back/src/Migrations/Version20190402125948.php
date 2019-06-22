<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190402125948 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user_event_vote (user_id INT NOT NULL, event_id INT NOT NULL, INDEX IDX_E2BC0F23A76ED395 (user_id), INDEX IDX_E2BC0F2371F7E88B (event_id), PRIMARY KEY(user_id, event_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_comment_vote (user_id INT NOT NULL, comment_id INT NOT NULL, INDEX IDX_FCEA5B8AA76ED395 (user_id), INDEX IDX_FCEA5B8AF8697D13 (comment_id), PRIMARY KEY(user_id, comment_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE refresh_tokens (id INT AUTO_INCREMENT NOT NULL, refresh_token VARCHAR(128) NOT NULL, username VARCHAR(255) NOT NULL, valid DATETIME NOT NULL, UNIQUE INDEX UNIQ_9BACE7E1C74F2195 (refresh_token), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_event_vote ADD CONSTRAINT FK_E2BC0F23A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_event_vote ADD CONSTRAINT FK_E2BC0F2371F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE user_comment_vote ADD CONSTRAINT FK_FCEA5B8AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_comment_vote ADD CONSTRAINT FK_FCEA5B8AF8697D13 FOREIGN KEY (comment_id) REFERENCES comment (id)');
        $this->addSql('ALTER TABLE comment ADD votes INT NOT NULL');
        $this->addSql('ALTER TABLE event ADD votes INT NOT NULL, CHANGE date date VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE game CHANGE console_id console_id INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE user_event_vote');
        $this->addSql('DROP TABLE user_comment_vote');
        $this->addSql('DROP TABLE refresh_tokens');
        $this->addSql('ALTER TABLE comment DROP votes');
        $this->addSql('ALTER TABLE event DROP votes, CHANGE date date VARCHAR(20) NOT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE game CHANGE console_id console_id INT DEFAULT NULL');
    }
}
